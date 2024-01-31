import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  mobiles=[
  {
     brand:"samsung",
     price:"30000", 
     stock:"100"
  },
  {
    brand:"realme",
     price:"20000", 
     stock:"200"
  },
  {
    brand:"iphone",
     price:"600000", 
     stock:"60"
  }
]

}
