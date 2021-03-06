import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/shared/models/LoginRequest';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RegisterRequest } from 'src/app/shared/models/RegisterRequest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  jwtHelper;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  login(loginReq: LoginRequest): Observable<any> {
    let result =  this.http.post('http://localhost:8081/profile/login',JSON.stringify(loginReq),httpOptions);
    return result;
  }

  register(regReq: RegisterRequest): Observable<any> {
    let result =  this.http.post('http://localhost:8081/profile/register',JSON.stringify(regReq),httpOptions);
    return result;
  }

  change(changeReq: any): Observable<any> {
    let result =  this.http.post('http://localhost:8081/profile/change-role',JSON.stringify(changeReq),httpOptions);
    return result;
  }

  users(): Observable<any> {
    let result =  this.http.get('http://localhost:8081/profile/get-profiles',httpOptions);
    return result;
  }

  get type(): any {
    let output;
    let token = localStorage.getItem('token');
    if (!token) {
      output = null;
    } else {
      output = this.jwtHelper.decodeToken(token).authorities[0].authority;
    }
    return output;
  }


  get name(): any {
    let output;
    let token = localStorage.getItem('token');
    if (!token) {
      output = null;
    } else {
      output = this.jwtHelper.decodeToken(token).sub;
    }
    return output;
  }

  get email(): any {
    let output;
    let token = localStorage.getItem('token');
    if (!token) {
      output = null;
    } else {
      output = this.jwtHelper.decodeToken(token).email;
    }
    return output;
  }


}
