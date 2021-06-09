import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/shared/models/LoginRequest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(loginReq: LoginRequest): Observable<any> {
    let result =  this.http.post('http://localhost:8081/profile/login',JSON.stringify(loginReq),httpOptions);
    return result;
  }
  
}
