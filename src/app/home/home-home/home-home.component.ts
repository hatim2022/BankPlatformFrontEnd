import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';
import { User } from 'src/app/model/user.model';
import { Account } from 'src/app/model/account.model';

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

 gotoTransaction(){
   this.router.navigateByUrl("/transactions")
 }

}
