import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';
import { Account } from 'src/app/model/account.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {


  withdrawValueCheck:number=0;
  depositValueCheck:number=0;
  withdrawValueSav:number=0;
  depositValueSav:number=0;

  userData;
  accounts:Account[];
  userSavingAccount:Account;
  userCheckingAccount:Account;
  amount1:number;
  amount2:number;


  div1:boolean;
  div2:boolean;

  constructor(private route: ActivatedRoute,private service: MainServiceService,private router:Router) {
    this.userData = this.router.getCurrentNavigation().extras.state;
    const userObservable = this.service.getAccountByUserId(localStorage.getItem('currentUser'));
    userObservable.subscribe((accountData :Account[])=>{
      this.accounts=accountData;
      this.userSavingAccount=this.accounts.find(acc => acc.accountType=="saving");
      this.userCheckingAccount=this.accounts.find(acc=> acc.accountType=="checking");  
    });
     
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  div1Function(){
    this.div1=!this.div1;
}

div2Function(){
  this.div2=!this.div2;
}

 gotoTransaction(){
   this.router.navigateByUrl("/transactions")
 }


 transferToChecking(){

  this.service.transferMoney(this.userSavingAccount.accountNumber,this.userCheckingAccount.accountNumber,this.amount2).subscribe(success => {      
    this.userSavingAccount.balance-=this.amount2;
    this.userCheckingAccount.balance+=this.amount2;

}, error => {
    console.log(error);
});
}
 

 transferToSaving(){
  this.service.transferMoney(this.userCheckingAccount.accountNumber,this.userSavingAccount.accountNumber,this.amount1).subscribe(success => {
    this.userSavingAccount.balance+=this.amount1;
    this.userCheckingAccount.balance-=this.amount1;

}, error => {
    console.log(error);
});
 }

}
