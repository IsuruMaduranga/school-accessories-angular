import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileLoaderService {

  profile:any;

  constructor(private http: HttpClient) { }

  getUserID(email:string):Observable<any>{
    console.log("titiiiiiii");
   return this.http.get("http://localhost:8081/profile/getProfile?email="+email);
  }
}
