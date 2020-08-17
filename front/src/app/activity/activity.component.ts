import { Component, OnInit, ElementRef } from '@angular/core';
import {MapService} from '../services/map.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  math='';
  arabic='';
  english='';
  france='';
  idMap='';
  idDegree='';
  idActivity='';
  isStillInLocation:boolean;
  title:string='';
  flag:boolean=true;
  fl:boolean=true;
  location:Object;
  public pass;
  myparam:string;
  preiousContainer:any[];
  degreeContainer:any[];
  activity='';
  constructor(private map:MapService,private elementRef:ElementRef,private route:Router,  private activeroute: ActivatedRoute){
    this.map.getAllDegree().subscribe(i => {
    for (const d of (i as any)) {
    this.idDegree=d.idd;
    console.log(this.idDegree);
    console.log(this.myparam);
  if(this.myparam == this.idDegree){
    // this.degreeContainer=i;
    this.math=d.mathDegree;
    this.arabic=d.aribacDegree;
    this.english=d.englishDegree;
    this.france=d.franceDegree;
    break;
  }}
  },err => {}); 

  this.map.getAllActivity().subscribe(i => {
    for (const d of (i as any)) {
      this.idActivity=d.idd
    if(this.myparam == this.idActivity){
      this.activity=d.activity;
      break;
    }}



  },err => {}); 

  
}
  ngOnInit() {
    this.activeroute.params.subscribe((params) => this.myparam =params['id']);
  }

}
