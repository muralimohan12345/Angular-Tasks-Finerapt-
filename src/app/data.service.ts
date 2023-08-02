import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhoneCategory } from './mobiles/PhoneCategory';
import { TelevisionCategory } from './televisions/TelevisionCategory';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string="http://localhost:8080/get";

   baseUrl:string="http://localhost:8080/api/users";

  constructor(private http:HttpClient) { 
  //  console.log('inside the service constuctor email is '+this.email)
  }

  getallproducts(): Observable<PhoneCategory[]>{
    return this.http.get<PhoneCategory[]>(this.url)
  }

  url2:string="http://localhost:8081/get";
   
  getall():Observable<any>{
    return this.http.get<any>(this.url2)
  }

  url3:string="http://localhost:8081/add";
   add(data:any):Observable<any>{
    return this.http.post<any>(this.url3, data);
   }

   verifyEmail(id: number) {
    return this.http.get(`${this.baseUrl}/verify/${id}`);
  }

 checkEmailExists(email:string){
            console.log('inside the  check email service')
  return this.http.get<boolean>(`${this.baseUrl}/checkEmail`,{ params:{ email }});
 }

 getEmail(id:number){
       console.log('inside the get email service method')
       return this.http.get<any>(`${this.baseUrl}/getEmail/${id}`);
 }

 // setters and getters should not work when the page refresh
//  public email: string = ''; 

//   setEmail(email:string):void{
//    this.email=email;
//    console.log('inside the service,set email is '+email)
//  }
//   getEmail(): string {
//      console.log('calling the get email service method, email is '+this.email);
//     return this.email;
//   }


}
