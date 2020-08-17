import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  constructor(private elementRef:ElementRef) {}
  ngOnInit() {}
  
  ngAfterViewInit(){
    var jquery1=document.createElement('script');
    jquery1.type='text/javascript';
    jquery1.src='./assets/js/custom2.js';
    this.elementRef.nativeElement.appendChild(jquery1);

    var jquery2=document.createElement('script');
    jquery2.type='text/javascript';
    jquery2.src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA7NFNts_A1lBBzWfSkmaP7FXlPHACCCfw&callback=initialize';
    this.elementRef.nativeElement.appendChild(jquery2);

    var jquery3=document.createElement('script');
    jquery3.type='text/javascript';
    jquery3.src='./assets/js/custom3.js';
    this.elementRef.nativeElement.appendChild(jquery3);
  }

}
