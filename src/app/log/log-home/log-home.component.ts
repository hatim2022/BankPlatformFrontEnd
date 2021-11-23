import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';
import { Account } from './account';
import { Transaction } from './transaction';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CURRENT_LOCAL_VARIABLE_LOGIN } from 'src/app/currentLocalVariableLogin';

@Component({
  selector: 'app-log-home',
  templateUrl: './log-home.component.html',
  styleUrls: ['./log-home.component.css']
})
export class LogHomeComponent implements OnInit {

  constructor(private service:MainServiceService,private router: Router, private http: HttpClient) { }

  readonly TRANSACTION_URL = 'http://localhost:8080/api/transaction';

  newCheckTransactionPost: Observable<any>;
  newSavingsTransactionPost: Observable<any>;

  userId:number;

  depositChecking:number;
  depositSavings:number;

  accounts:Account[];

  isSubmit = false;

  ngOnInit(): void {

    this.userId = CURRENT_LOCAL_VARIABLE_LOGIN[0].userId;

    this.depositChecking = CURRENT_LOCAL_VARIABLE_LOGIN[0].amount;
    this.depositSavings = CURRENT_LOCAL_VARIABLE_LOGIN[1].amount;

    const accountObservable = this.service.getMyAccounts(this.userId);
    accountObservable.subscribe((accountData :Account[])=>{
      this.accounts=accountData;
    })
  }

  @ViewChild('f', { static: false }) signupForm: NgForm;

  createTransactions() {
    this.createTransactionsPosts();
    this.isSubmit = true;
  }

  createTransactionsPosts() {
    const date = new Date();
    let timeFormat = date.getUTCFullYear() +"-"+
                     date.getUTCMonth() +"-"+
                     date.getUTCDay() +" "+
                     date.getUTCHours() +":"+
                     date.getUTCMinutes() +":"+
                     date.getUTCSeconds();

    const data: Transaction={
      accountNumber: this.accounts[0].accountNumber,
      timeStamp: timeFormat,
      transactionAmount: this.depositChecking,
    }
    this.newCheckTransactionPost = this.http.post(this.TRANSACTION_URL, data);

    const data1: Transaction={
      accountNumber: this.accounts[1].accountNumber,
      timeStamp: timeFormat,
      transactionAmount: this.depositSavings,
    }
    this.newSavingsTransactionPost = this.http.post(this.TRANSACTION_URL, data1);
  }

  onBack() {
      this.router.navigateByUrl("/login")
  }

}
