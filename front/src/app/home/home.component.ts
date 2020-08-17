import { Component, OnInit , ElementRef } from '@angular/core';
import *  as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 constructor(private elementRef:ElementRef) {}
ngOnInit() {
 
}

ngAfterViewInit(){
  var jquery=document.createElement('script');
  jquery.type='text/javascript';
  jquery.src='./assets/js/custom.js';
  this.elementRef.nativeElement.appendChild(jquery);
}
}
