import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CheckComponent } from './check/check.component';
import { HttpClientModule } from '@angular/common/http';
import { LaptopsComponent } from './laptops/laptops.component';
import { SamsungComponent } from './samsung/samsung.component';
import { LoginComponent } from './login/login.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { AddTelevisionComponent } from './add-television/add-television.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';
import { EmailVerificationComponent } from './home/email-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPassword2Component } from './reset-password2/reset-password2.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    MobilesComponent,
    CheckComponent,
    LaptopsComponent,
    SamsungComponent,
    LoginComponent,
    TelevisionsComponent,
    AddTelevisionComponent,
    Login2Component,
    RegisterComponent,
    VerificationComponent,
    EmailVerificationComponent,
    ResetPasswordComponent,
    ResetPassword2Component,
    ForgotPasswordComponent,
    ForgotPasswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
