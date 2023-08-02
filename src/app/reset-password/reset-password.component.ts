import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  email: string;

  myForm:FormGroup;

   constructor(private http:HttpClient, private formBuilder:FormBuilder, private service:DataService){}
     
    ngOnInit(){
      this.myForm=this.formBuilder.group({
        email: ['',[Validators.required, Validators.email]]
      });
    }
 
  
  





  resetPassMail(){
          console.log('inside the reset mail method');
          console.log(this.email);
     this.http.get<any>('http://localhost:8080/api/users/resetPassMail?email='+this.email).subscribe(()=>{
        console.log('email sent for reset Password');
        alert('Please check your email for reset your password');
       // this.service.setEmail(this.email);
          console.log('setting the mail is '+this.email);
  });
  }


}
