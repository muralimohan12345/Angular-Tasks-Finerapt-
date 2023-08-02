import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent {
 constructor(private router:Router , private http:HttpClient , 
             private route:ActivatedRoute, private formBuilder:FormBuilder){}

 myForm:FormGroup

 ngOnInit(){
  this.myForm=this.formBuilder.group({
    newPassword : ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });
 }

message:string;
newPassword:string;
confirmPassword:string;


 newPass:string
 confirmPass:string
 
 resetPassword(){
   var id;
  this.route.queryParams.subscribe(params =>
   {id=params['userId'];}
  )
   
  var obj={
    userId:id,
    password:this.newPass
  }

  this.http.post('http://localhost:8080/api/users/reset',obj).subscribe(()=>{
  console.log('inside the forgot password method');
  console.log('new password is '+this.newPass)
  if(this.newPass !== this.confirmPass){
    this.message="Please check your password";}
    
  else{
    alert('your password has been changed. You can login now')
    this.router.navigateByUrl('/login2');}
   } 
);

 }

}
