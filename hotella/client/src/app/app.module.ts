import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProductComponent } from "./components/AddReservation/product.component";
import { FormsModule, } from '@angular/forms';
import { ProductService } from './components/AddReservation/product.service';
import { AddHousekeeperComponent } from './components/addhousekeepers/addhousekeepers.component';
import { AddHousekeeperService } from './components/addhousekeepers/addhousekeepers.service';
import { AddroomComponent } from './components/addrooms/addrooms.component';
import { AddroomService } from './components/addrooms/addrooms.service';
import { BillingComponent } from './components/billing/billing.component';
import { BillingService } from './components/billing/billing.service';
import { FoodProductComponent } from './components/foods/foodproduct.component';

import { FoodProductService } from './components/foods/foodproduct.service';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
// import {lodash} from 'lodash';
// import { findIndex } from 'lodash';
// import { clone } from 'lodash';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    AddHousekeeperComponent,
    AddroomComponent,
    BillingComponent,
    FoodProductComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlashMessagesModule,
    FormsModule,
  ],
  // findIndex, clone
  providers: [AuthService, AuthGuard, NotAuthGuard, ProductService, AddHousekeeperService, AddroomService, BillingService, FoodProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
