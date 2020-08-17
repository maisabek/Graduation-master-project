import { Component, OnInit, ElementRef } from '@angular/core';
import {MapService} from '../services/map.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {userpassword} from './userpassword';
import {message} from './message'
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  iconUrl:string;
  linkprofile:string;// not defind until now 
  }
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  userpass: userpassword = new userpassword();
  message:message=new message();

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
  submitted = false;
  myparam:string;
  preiousContainer:any[];
  degreeContainer:any[];
  activity='';
  data= {
    currentpass:"current",
    password:"confirmpassword"
  };
 
  smartphone: any = [];
  contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
    conpassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)])

  });
  constructor(private map:MapService,private elementRef:ElementRef,private route:Router,  private activeroute: ActivatedRoute){
    // map.getTest().subscribe(data=> {
    //   for (const d of (data as any)) {
    // //     this.smartphone.push({
    // //       latitude: d.latitude,
    // //       longitude: d.longitude
    // // });
    // console.log("this.map.id="+this.map.id)
    // this.idMap=d.idd;
    // if(this.myparam == this.idMap){
    //   this.lat=d.latitude;
    //   this.lng=d.longitude;
    //  this.flag=true;
    //   break;

    // }else{
    //   this.flag=false;
    //   continue;
    // }
    //   }
    //   if(this.flag == false){alert("error")}
    // });

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
  saveMessage() {
    const data = {
      // idd:this.message.idd,
      message: this.message.message,
    };
    this.map.uploadMessageFromParent(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
  newMessage() {
    this.submitted = false;
    this.message = {
      //  idd:'',
       message:'',
  
    };
    
  }

  ngOnInit() {
    this.activeroute.params.subscribe((params) => this.myparam =params['id']);
    this.map.getAllPrevious().subscribe(i => {
      this.preiousContainer=i;
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
// isStill(){
//   if(this.lat == this.lat + 500){
//    this.isStillInLocation=true;
//   }else{
//     this.isStillInLocation=false;

//   }
//   console.log(this.isStillInLocation)
//   console.log(this.lat)
//   return this.isStillInLocation;
//   }
  updateTutorial(){
    console.log("pass="+this.userpass.password)
    this.map.update(this.myparam,this.userpass.password)
      .subscribe(
        response => {
          console.log(response);
          // this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
       alert("nnnn")
        // this.router.navigate(['/admin']);
  }
}