import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,NgForm } from '@angular/forms';
import {student} from './student';
import {MapService} from '../services/map.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newStudent: student = new student();
  submitted = false;
  students: student[];
  contactsForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
    conpassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
    gender:new FormControl('',[Validators.required]),
    year:new FormControl('',[Validators.required]),
    contary:new FormControl('',[Validators.required]),
  });
  messageContainer:any[]=[];
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
}
  constructor(private map:MapService,private route:Router) { }

  ngOnInit() {
  }
  saveTutorial() {
    const data = {
      username: this.newStudent.username,
      email:this.newStudent.email,
      password:this.newStudent.password,
      confirmpassword:this.newStudent.confirmpassword,
      gender:this.newStudent.gender,
      yeargrad:this.newStudent.yeargrad,
      countryname:this.newStudent.countryname
    };
    this.map.createStudent(data).subscribe(
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
    this.newStudent = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender:'',
    yeargrad:'',
    countryname:'',
    };
    
  }
  // if( this.submitted == false){
  //   this.route.navigate(['/home']);
  //   }
}
