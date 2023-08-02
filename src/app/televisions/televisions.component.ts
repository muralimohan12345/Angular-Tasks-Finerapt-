import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { TelevisionCategory } from './TelevisionCategory';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent {
    constructor(private service:DataService,private router:Router){ }

 //   tv!:TelevisionCategory[];
    hello : any

     ngOnInit():void{
      this.service.getall().subscribe(result=>this.hello=result)

      

     }

     goTo() {
      this.router.navigateByUrl("addTelevision")
   }

}
