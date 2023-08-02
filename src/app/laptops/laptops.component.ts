import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  constructor(private router:Router){ }

  goto(){
      this.router.navigateByUrl("/check")
  }
 
  gotoSamsung(){
    this.router.navigateByUrl("/samsung")
  }


}


