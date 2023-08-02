import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html', 
  styleUrls: ['./verification.component.css']
 
})
export class VerificationComponent implements OnInit{
      message:string;
      private baseUrl='http://localhost:8080/api/users';
 

 //   public baseUrl2='http://localhost:8080/api/users/userId';

      constructor(private route: ActivatedRoute, private http:HttpClient, private service:DataService){}

      ngOnInit() {
                
 

                console.log('inside the ngOnInit1');
                var id = 0
               // const id = this.route.snapshot.params['userId'];
               this.route.queryParams.subscribe(params => 
                                                { id = params['userId'];}
                                                ) 
                // alert(id)
                console.log('inside the ngOnInit2');
                console.log(id);
        this.http.get(`${this.baseUrl}/verify/${id}`).subscribe(() => {
                 console.log('inside the ngOnInit3');
               window.alert('Email verification successful. You can now log in.');

            // this.message= 'Email verified successfully';
        });





        // console.log('inside the ngOnInit1');

        // const id:any = this.route.snapshot.params['userId'];
        //                      console.log(id);
        //     this.service.verifyEmail(id).subscribe(() => {
        //       alert('Email verification successful. You can now log in.');
        //     });

      }
}
