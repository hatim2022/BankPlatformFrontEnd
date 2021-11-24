import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {

  userData;
  accounts:Account[];
  externalAccounts:Account[];
  originAccount:string;
  destinationAccount:string;
  amount:number;
  userid:any;

  constructor(private route: ActivatedRoute,private service: MainServiceService,private router:Router) {
    this.userData = this.router.getCurrentNavigation().extras.state;
    this.userid=localStorage.getItem('currentUser')
    const userAccountObservable = this.service.getAccountByUserId(this.userid);
    userAccountObservable.subscribe((accountData :Account[])=>{
      this.accounts=accountData;
    });

    const accountObservable = this.service.getExternalAccounts(this.userid);
    accountObservable.subscribe((accountData :Account[])=>{
      this.externalAccounts=accountData;
    });



  }


  @ViewChild('f', { static: false }) Form: NgForm;

  onSubmit(){
    this.originAccount=this.Form.value.originAccount;
    this.destinationAccount=this.Form.value.destinationAccount;
    this.amount=this.Form.value.amount;
    console.log(this.originAccount);
    console.log(this.destinationAccount);
    console.log(this.amount);

    this.service.transferMoney(this.originAccount,this.destinationAccount,this.amount).subscribe(success => {
      
      this.accounts.find(acc => acc.accountNumber==parseInt(this.originAccount)).balance-=this.amount;
      this.externalAccounts.find(acc => acc.accountNumber==parseInt(this.destinationAccount)).balance+=this.amount;

  }, error => {
      console.log(error);
  });
  }


  ngOnInit(): void {
  }

}
