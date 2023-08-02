import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { CheckComponent } from './check/check.component';
import { SamsungComponent } from './samsung/samsung.component';
import { LoginComponent } from './login/login.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { AddTelevisionComponent } from './add-television/add-television.component';
import { Login2Component } from './login2/login2.component';
import { RegisterComponent } from './register/register.component';
import { EmailVerificationComponent } from './home/email-verification.component';
import { VerificationComponent } from './verification/verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPassword2Component } from './reset-password2/reset-password2.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';

const routes: Routes = [
  {
  path:'mobile',component : MobilesComponent
  },
  {
    path:'laptops',component:LaptopsComponent
  },
  {
    path:'check',component:CheckComponent
  },
  {
    path:'samsung',component:SamsungComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'televisions', component:TelevisionsComponent
  },
  {
    path:'addTelevision', component:AddTelevisionComponent
  },
  {
    path:'login2', component:Login2Component
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'home',component:EmailVerificationComponent
  },
  {
    path:'verification', component:VerificationComponent
  },
  {
    path:'resetPassword', component:ResetPasswordComponent
  },
  {
    path:'resetPass', component:ResetPassword2Component
  },
  {
    path:'forgotPassword', component:ForgotPasswordComponent
  },
  {
    path:'forgotPasswordForm', component:ForgotPasswordFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
