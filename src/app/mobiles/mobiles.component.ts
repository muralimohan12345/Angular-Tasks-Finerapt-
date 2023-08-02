import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { PhoneCategory } from './PhoneCategory';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {

  constructor(private service:DataService,private router:Router) { }

   mob!:PhoneCategory[];

ngOnInit(): void{
  this.service.getallproducts().subscribe(result=>this.mob=result);
}

}
