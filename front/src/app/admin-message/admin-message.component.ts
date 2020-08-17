import { Component, OnInit, ElementRef } from '@angular/core';
import {MapService} from '../services/map.service';
import {Router,ActivatedRoute} from '@angular/router'
import {FormControl,FormGroup,Validators,NgForm } from '@angular/forms';
import {admin} from './admin'
@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit {
  public message:string;
  myparam:string;
  idActivity:string;
  admin:admin=new admin();
  submitted = false;
  contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    conpassword:new FormControl('',[Validators.required])

  });
  constructor(private map:MapService,private elementRef:ElementRef,private route:Router,  private activeroute: ActivatedRoute){
    this.map.getAllMessageToSchool().subscribe(i => {
      for (const d of (i as any)) {
        this.idActivity=d.idd
      if(this.myparam == this.idActivity){
        this.message=d.message;
        break;
      }
    }
    },err => {});
  
  }
  ngOnInit() {
        this.activeroute.params.subscribe((params) => this.myparam =params['id']);

    
  }
  saveMessage() {
    const data = {
      idd:this.admin.idd,
      activity: this.admin.message,
    };
    this.map.uploadMessageFromSchool(data).subscribe(
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
    this.admin= {
       idd:'',
       message:'',
  
    };
    
  }
 
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }

}
