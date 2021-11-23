import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';
import { User } from './user';
import { Account } from './account'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CURRENT_LOCAL_VARIABLE_LOGIN } from 'src/app/currentLocalVariableLogin';

@Component({
  selector: 'app-deposit-home',
  templateUrl: './deposit-home.component.html',
  styleUrls: ['./deposit-home.component.css']
})
export class DepositHomeComponent implements OnInit {

  constructor(private service:MainServiceService,private router: Router, private http: HttpClient) { }

  readonly ACCOUNT_URL = 'http://localhost:8080/api/account';

  newCheckPost: Observable<any>;
  newSavingPost: Observable<any>;

  depositChecking:number;
  depositSavings:number;

  userId:number;
  email:string;
  password:string;

  users:User[];
  currentUser:User;

  isSubmit = false;

  ngOnInit(): void {
    this.email = CURRENT_LOCAL_VARIABLE_LOGIN[0].saved;
    this.password = CURRENT_LOCAL_VARIABLE_LOGIN[1].saved;

    const userObservable = this.service.getUsers();
    userObservable.subscribe((userData :User[])=>{
      this.users=userData;
    })
  }

  @ViewChild('f', { static: false }) signupForm: NgForm;

  createAccounts(){
    this.depositChecking = this.signupForm.value.depositChecking;
    this.depositSavings = this.signupForm.value.depositSavings;

    this.currentUser=this.users.find(usr=> usr.email==this.email);
    this.createAccountsPosts();
    this.isSubmit = true;

    CURRENT_LOCAL_VARIABLE_LOGIN[0].saved = this.email;
    CURRENT_LOCAL_VARIABLE_LOGIN[1].saved = this.password;

    CURRENT_LOCAL_VARIABLE_LOGIN[0].userId = this.currentUser.userId;
    CURRENT_LOCAL_VARIABLE_LOGIN[1].userId = this.currentUser.userId;

    CURRENT_LOCAL_VARIABLE_LOGIN[0].amount = this.depositChecking;
    CURRENT_LOCAL_VARIABLE_LOGIN[1].amount = this.depositSavings;
  }

  createAccountsPosts(){
    const data: Account={
      userId: this.currentUser.userId,
      accountType: "checking",
      balance: this.depositChecking
    }
    this.newCheckPost = this.http.post(this.ACCOUNT_URL, data);
    const data1: Account={
      userId: this.currentUser.userId,
      accountType: "saving",
      balance: this.depositSavings
    }
    this.newSavingPost = this.http.post(this.ACCOUNT_URL, data1);
  }

  onBack() {
      this.router.navigateByUrl("/log")
  }

}
