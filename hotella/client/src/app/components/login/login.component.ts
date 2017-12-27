import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageClass;
  message;
  processing = false;
  form: FormGroup;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authGuard: AuthGuard
  ) {
    this.createForm(); 
  }

  // Function to create login form
  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required], 
      password: ['', Validators.required] 
    });
  }

  // Function to disable form
  disableForm() {
    this.form.controls['username'].disable(); 
    this.form.controls['password'].disable(); 
  }

  // Function to enable form
  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable(); 
  }

  // Functiont to submit form and login user
  onLoginSubmit() {
    this.processing = true;
    this.disableForm(); 
    // Create user object from user's input
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value 
    }

    // Function to send login data to API
    this.authService.login(user).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; 
        this.message = data.message; 
        this.processing = false; 
        this.enableForm(); 
      } else {
        this.messageClass = 'alert alert-success'; 
        this.message = data.message; // Set success message
       
        // Function to store user's token in client local storage
        this.authService.storeUserData(data.token, data.user);
        setTimeout(() => {

          if (this.previousUrl) {
            this.router.navigate([this.previousUrl]); 
          } else {
            this.router.navigate(['/dashboard']); 
          }
        }, 2000);
      }
    });
  }

  ngOnInit() {
  
    if (this.authGuard.redirectUrl) {
      this.messageClass = 'alert alert-danger';
      this.message = 'You must be logged in to view that page.'; 
      this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
      this.authGuard.redirectUrl = undefined;
    }
  }

}