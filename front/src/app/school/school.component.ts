import { Component, OnInit, ElementRef } from '@angular/core';
import {FormControl,FormGroup,Validators,NgForm } from '@angular/forms';
import {degree} from './degree'
import {MapService} from '../services/map.service';
import { Router } from '@angular/router';
import { activites } from './activites';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    conpassword:new FormControl('',[Validators.required])

  });
  newdegree:degree=new degree();
  activites:activites=new activites();
  submitted = false;
  degrees: degree[];
  degreeContainer:any[];
  constructor(private map:MapService,private route:Router,private elementRef:ElementRef) { }

  ngOnInit() {
    this.map.getAllDegree().subscribe(i => {
      this.degreeContainer=i;
    },err => {}); 
  }
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
  logOut(){
    this.route.navigate(['/home']);
  }
  saveTutorial() {
    const data = {
      idd:this.newdegree.idd,
      name: this.newdegree.name,
      mathDegree: this.newdegree.mathDegree,
      aribacDegree: this.newdegree.aribacDegree,
      englishDegree: this.newdegree.englishDegree,
      franceDegree: this.newdegree.franceDegree,
    };
    this.map.uploadDegree(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
  newTutorial() {
    this.submitted = false;
    this.newdegree = {
       idd:'',
       name:'',
      mathDegree: '',
      aribacDegree: '',
      englishDegree: '',
      franceDegree: ''
    };
    
  }

  saveActivity() {
    const data = {
      idd:this.activites.idd,
      activity: this.activites.activity,
    };
    this.map.uploadActivity(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
  newActivity() {
    this.submitted = false;
    this.activites = {
       idd:'',
       activity:'',
  
    };
    
  }

}
