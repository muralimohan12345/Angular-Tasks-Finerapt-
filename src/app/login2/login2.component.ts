import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
   constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder){}

 myForm:FormGroup

 ngOnInit(){
 this.myForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
 })
}



signup(){
  this.router.navigateByUrl('register')
}

email:any;
 password:any;


credentials:boolean;
 

 login(){
    console.log('inside the login method1');

   var obj={
      emailId:this.email,
      password:this.password
      }

  this.http.post<boolean>('http://localhost:8080/api/users/login', obj).subscribe(
    (exists:boolean)=>{
     this.credentials=exists;
     console.log('boolean is '+exists)
     if(exists==false){
       this.router.navigateByUrl('/home');
     }
    },
    (error) => {
      console.log('error is'+error)
    }
  );
 }

}
