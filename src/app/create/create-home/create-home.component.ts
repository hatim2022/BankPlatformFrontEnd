import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';
import { User } from './user';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CURRENT_LOCAL_VARIABLE_LOGIN } from 'src/app/currentLocalVariableLogin';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {

  constructor(private service:MainServiceService,private router: Router, private http: HttpClient) { }

  readonly USER_URL = 'http://localhost:8080/api/user';

  newPost: Observable<any>;
  post: Observable<any>;

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  rePassword:string;

  isSubmit = false;

  ngOnInit(): void {
  }

  @ViewChild('f', { static: false }) signupForm: NgForm;

  createUser(){
    this.firstName=this.signupForm.value.firstName;
    this.lastName=this.signupForm.value.lastName;
    this.email=this.signupForm.value.email;
    this.password=this.signupForm.value.password;
    this.rePassword=this.signupForm.value.rePassword;


    if (this.password == this.rePassword){
      this.createUserPost();
      this.isSubmit = true;
      CURRENT_LOCAL_VARIABLE_LOGIN[0].saved = this.email;
      CURRENT_LOCAL_VARIABLE_LOGIN[1].saved = this.password;
    }
    else {
      console.log("Incorrect password.");
    }
  }

  createUserPost(){
    const data: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
    this.newPost = this.http.post(this.USER_URL,data);
    this.post = this.http.get('http://localhost:8080/api/getUser?email='+this.email+'&password='+this.password);
  }

  onBack() {
      this.router.navigateByUrl("/deposit")
  }

}
