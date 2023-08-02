import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reset-password2',
  templateUrl: './reset-password2.component.html',
  styleUrls: ['./reset-password2.component.css']
})
export class ResetPassword2Component {

  email:string='';

  constructor(private http:HttpClient, private router:Router, 
              private route:ActivatedRoute, private formBuilder:FormBuilder, private service:DataService){
               // this.email=this.http.get('http://localhost:8080/api/users/getEmail');

              
                //  this.email= this.service.getEmail();
              //   console.log('getting email is '+this.email )
              }

  myForm:FormGroup;

  ngOnInit(){
    this.myForm=this.formBuilder.group({
      newPassword: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]]
    });

    var id;

   this.route.queryParams.subscribe(params=>{
    id=params['userId'];
   })
          console.log('extracting the id is '+id);

   this.service.getEmail(id).subscribe((existingEmail)=>{
    this.email=existingEmail.emailId   //only string value is not getting here so by the object only it is getting
   }
   )

  }

  // newPassword:any;
  // confirmPassword:any;

  currentPass:string;
  newPass:string;
  confirmPass:string;

  message:string;


  reset(){
    

   var id;
    this.route.queryParams.subscribe(params => 
      { id = params['userId'];}
      ) 

    console.log('new password is '+this.newPass);
    var obj = {
      userId : id,
      password : this.newPass
    }
    this.http.post<any>('http://localhost:8080/api/users/reset',obj).subscribe(()=>{
      console.log(this.newPass);
      if(this.newPass !== this.confirmPass){
        this.message="please check your passwords";
         }
         else{
        alert('Reset of your password is successfull.You can login now')
      this.router.navigateByUrl('/login2');}
    }
    );
  };

  currentPassExist:boolean;
// not working 
  checkCurrentPass(){
    console.log('inside the checkCurrentPass method 1');
      this.http.get<boolean>('http://localhost:8080/api/users/checkCurrentPass'+this.currentPass).subscribe(
        (exists:boolean)=>{
             this.currentPassExist=exists;
         console.log('inside the checkCurrentPass 2');
      }
      );
  }
 
}
