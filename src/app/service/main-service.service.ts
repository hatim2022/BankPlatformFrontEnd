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
  public getUserByEmailAndPassword(email, password){
    return this.http.get('http://localhost:8080/api/getUser?email=' + email + '&password=' + password);
  }
  public getMyAccounts(userId){
    return this.http.get('http://localhost:8080/api/accounts?userId=' + userId);
  }
  
  public getAccountByUserId(id){
    return this.http.get('http://localhost:8080/api/accounts?userId='+id+'');
  }

}
