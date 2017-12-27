import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/AddReservation/product.component';
import { AddHousekeeperComponent } from './components/addhousekeepers/addhousekeepers.component';
import { AddroomComponent } from './components/addrooms/addrooms.component';
import { BillingComponent } from './components/billing/billing.component';
import { FoodProductComponent } from './components/foods/foodproduct.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';



// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]  // Dashboard Route
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard] // Register Route
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard] 
  },
  {
    path: 'addhousekeepers',
    component: AddHousekeeperComponent,
    canActivate: [AuthGuard]  
  },
  {
    path: 'addrooms',
    component: AddroomComponent,
    canActivate: [AuthGuard]  
  },
  {
    path: 'foodproducts',
    component: FoodProductComponent,
    canActivate: [AuthGuard]  
  },
  {
    path: 'billing',
    component: BillingComponent,
    canActivate: [AuthGuard]  
  },
  {
    path: 'addreservation',
    component: ProductComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
