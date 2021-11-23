import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get('http://localhost:8080/api/userlist');
  }

  public getUserById(id){
    return this.http.get('http://localhost:8080/api/userlist');
  }

  public getAccountByUserId(id){
    return this.http.get('http://localhost:8080/api/accounts?userId='+id+'');
  }

}
