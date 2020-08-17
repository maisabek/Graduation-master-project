import { Component, OnInit,Input } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MapService} from '../services/map.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
    users:new FormControl('',Validators.required)
  });
  messageContainer:any[]=[];
  //  email:string;
  public passw:string;
  //  message={
  //   email:this.contactsForm.controls.userEmail.value,
  //   password:this.contactsForm.controls.password.value,

  // }
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
  console.log("passw"+message.password);

}
userName:string ='';
password :string= '';
users:string='';
public username:string;
public pass:string;
smartphone: any = [];
flag:boolean=false;
constructor(private map:MapService,private route:Router){}
ngOnInit(){
  console.log(this.userName+` password -`+this.password+ 'users'+this.users);
}
registeredUser(){
 let {userName,password,users} = this;
 if(users == 'user'){
//  this.map.loginTest().subscribe(data=> {
      //   for (const d of (data as any)) {
  
      // this.userName=d.username;
      // this.pass=d.password;
      // this.map.id=d.idd;
      // console.log(userName+' password -'+password);
      // console.log("userName="+this.userName);
      // console.log("password="+this.pass);
      // console.log("id="+ this.map.id)
      // if(userName==this.userName && password == this.pass){
       
        // this.flag=true;
        // break;
    //  }else{
    //   this.flag=false;
    //    continue;
    //  }
    //     }
        // if(this.flag == true){
          this.route.navigate(['/gpsdata',1]);
        // }else{
        //   alert("authentication faild");
        //   console.log(this.flag)
        //   console.log(this.smartphone);
        // }       
      // });
    }else if(users == 'school'){
      // this.map.getAllSchool().subscribe(data=> {
      //   for (const d of (data as any)) {
      //     this.smartphone.push({
      //       userName: d.email,
      //       password: d.password
      // });
      // this.userName=d.email;
      // this.pass=d.password;
      // console.log(userName+' password -'+password);
      //   console.log("userName="+this.userName);
      //   console.log("password="+this.pass);
      // if(userName==this.userName && password == this.pass){
        this.flag=true;
    //     break;
    //  }else{
    //   this.flag=false;
    //    continue;
    //  }
    //     }
        // if(this.flag == true){
          this.route.navigate(['/school']);
        // }else{
        //   alert("authentication faild");
        //   console.log(this.flag)
        //   console.log(this.smartphone);
        // }       
      // });
    }else if(users == 'admin'){
      if(userName=='admin@dd'&& password == "Admin"){
      this.route.navigate(['/admin']);
      }
    }
}}