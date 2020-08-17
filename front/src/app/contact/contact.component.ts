import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {request} from './request';
import {MapService} from '../services/map.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  request: request = new request();
  submitted = false;
  requests: request[];
  contactsForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    subject:new FormControl('',[Validators.required]),
    message:new FormControl('',[Validators.required])
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
  ngOnInit() {}
  saveTutorial() {
    const data = {
      username: this.request.username,
      email: this.request.email,
      address: this.request.address,
       requ: this.request.requ,
    };
    this.map.createRequest(data).subscribe(
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
    this.request = {
    username: '',
    email: '',
    address: '',
    requ: ''
    };
    
  }
  // if( this.submitted == false){
  //   this.route.navigate(['/home']);
  //   }
}
