import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service';
import {ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-previous-location',
  templateUrl: './previous-location.component.html',
  styleUrls: ['./previous-location.component.scss']
})
export class PreviousLocationComponent implements OnInit {
  lat:number=0.0;
  lng:number=0.0;
  public idMap='';
  myparam:string;
  flag:boolean=true;

  constructor( map:MapService ,private route:Router,  private activeroute: ActivatedRoute){
    map.getAllPrevious().subscribe(data=> {
      for (const d of (data as any)) {
    this.idMap=d.idd;
    console.log()
    if(this.myparam == this.idMap){
      this.lat=d.latitude;
      this.lng=d.longitude;
     this.flag=true;
      break;

    }else{
      this.flag=false;
      continue;
    }
      }
      if(this.flag == false){alert("error")}
    });
  }

  ngOnInit() {
    this.activeroute.params.subscribe((params) => this.myparam =params['id']);

  }

}
