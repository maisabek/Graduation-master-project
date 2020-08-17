import { Component, OnInit,ElementRef } from '@angular/core';
import {MapService} from '../services/map.service';
import {FormControl,FormGroup,Validators,NgForm } from '@angular/forms';
import {user} from './user';
import { Router } from '@angular/router';
import { school } from './school';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  user: user = new user();
  school:school= new school();
  submitted:boolean = false;
  submittedschool:boolean = false;
  users: user[];
  contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
    conpassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)])

  });
  messageContainer:any[]=[];
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
}

  studentContainer:any[];
  requestContainer:any[];
  userContainer:any[];
  constructor(private elementRef:ElementRef,public map:MapService,private route:Router){}

  ngOnInit() {
   this.map.studentLogin().subscribe(i => {
      this.studentContainer=i;
    },err => {}) 

    this.map.getAllRequest().subscribe(i => {
      this.requestContainer=i;
    },err => {})  

       this.map.loginTest().subscribe(i => {
      this.userContainer=i;
    },err => {}) 
  }


  saveTutorial() {
    const data = {
      idd:this.user.idd,
      username: this.user.username,
      password:this.user.password
    };
    this.map.createUser(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
      if(this.submitted == true){
        alert("user added successfully");
      }
  }
  newTutorial(){
    this.submitted = false;
    this.user = {
    idd:'',
    username: '',
    password:''
    };
  }

  saveEmailtoschool() {
    const data = {
      idd:this.school.idd,
      email: this.school.email,
      password:this.school.password
    };
    this.map.createSchool(data).subscribe(
      response => {
        console.log(response);
        this.submittedschool = true;
      },
      error => {
        console.log(error);
      });
      if(this.submittedschool == true){
        alert("user added successfully");
      }
  }
  newEmailtoschool(){
    this.submitted = false;
    this.user = {
    idd:'',
    username: '',
    password:''
    };
  }
 
  logOut(){
    this.route.navigate(['/home']);
  }
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
}
