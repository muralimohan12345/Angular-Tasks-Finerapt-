import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private route:Router , private http:HttpClient , private formBuilder:FormBuilder){}

  myForm:FormGroup

  ngOnInit(){
     this.myForm=this.formBuilder.group({
    email: ['',[Validators.required,Validators.email]]
  });
  }

  email:string;

  forgotPassword(){
    console.log('inside the forgot password method')
     this.http.get('http://localhost:8080/api/users/forgotPasswordMail?email='+ this.email).subscribe(()=>{
       console.log('api call sent to spring boot');
       alert('Please check your email for reset the password');
   } );
     

   // this.route.navigateByUrl('/forgotPasswordForm')
  }

}
