import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {observable,Observable} from 'rxjs';
 import {userpassword} from '../map/userpassword';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { student } from '../register/student';
interface Location{
  latitude: string;
  longitude:string;
  country_capital:string;
}
const BaseUrl = 'http://localhost:8083/api/updatePass';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  userpass: userpassword = new userpassword();
 private baseUrl = 'http://localhost:8083';
 public id='';
  constructor(public http:HttpClient){}
  getTest(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/')
    //http://localhost:8083/api/v/todo/
    //http://192.168.1.3:8083/api/v/todo/
  }
 
  loginTest(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/users')
  }
  studentLogin(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/student')
  }
  getAllRequest(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/allrequest')
  }
  getAllPrevious(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/previousLocation');
  }
  getAllDegree(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/degree');
  }
  getAllSchool(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/school');
  }
  getAllActivity(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/studentActivity');
  }
  getAllMessageToSchool(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/allMessageToSchool');
  }
  uploadMessageFromParent(data){
    return this.http.post<any>(this.baseUrl + '/api/uploadMessageParent', data);
  } 

  getAllMessageToparent(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/api/allMessageToParent');
  }
  uploadMessageFromSchool(data){
    return this.http.post<any>(this.baseUrl + '/api/uploadMessageSchool', data);
  } 
  createStudent(data){
    return this.http.post<any>(this.baseUrl + '/api/allstudent', data);
  }
  createRequest(data){
    return this.http.post<any>(this.baseUrl + '/api/request', data);
  }
  createUser(data){
    return this.http.post<any>(this.baseUrl + '/api/createuser', data);
  } 
    createSchool(data){
    return this.http.post<any>(this.baseUrl + '/api/createSchool', data);
  } 
 
  uploadDegree(data){
    return this.http.post<any>(this.baseUrl + '/api/uploadDegree', data);
  } 
 
  uploadActivity(data){
    return this.http.post<any>(this.baseUrl + '/api/uploadActivity', data);
  } 
  sendMessage(data){
    return this.http.post<any>(this.baseUrl + '/api/sendMessage', data);
  }
  // get(id) {
  //   return this.http.get('${baseUrl}/${id}');
  // }
  update(idd, data):Observable<any>{
    return this.http.put(`${BaseUrl}/${idd}`, data);

  }       
}