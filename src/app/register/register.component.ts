import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    user={
      firstName:'',
      lastName: '',
      emailId: '',
      password: '',
    };

  emailExists: boolean;

  myForm: FormGroup; 

 constructor(private http:HttpClient , private router: Router , private service:DataService,
             private formBuilder:FormBuilder   ){ }  

             ngOnInit() {
              // Initialize your form with form controls and validation rules
              this.myForm = this.formBuilder.group({
                firstName: ['', Validators.required],  // Example: Required field
                email: ['', [Validators.required, Validators.email]], // Example: Required and email format
                password: ['', [Validators.required, Validators.min(5)]], // Example: Required and minimum age
              });
            }
        
    
    
    // get firstName() {
    //   return this.myForm.get('firstName');
    // }
             
  
 registerUser(){
  this.http.post('http://localhost:8080/api/users/register', this.user).subscribe(() => {
     console.log('User registered successfully');
     alert('Registration successful. Check your email for verification.');
      // this.router.navigateByUrl('verification')
  });
 }

 checkEmail():void {
  this.service.checkEmailExists(this.user.emailId).subscribe(
      (exists:boolean) => {
        this.emailExists=exists;
      },
      (error) => {
        console.log('error is'+error)
      }
  );
 }


}
