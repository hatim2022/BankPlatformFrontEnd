import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { Transaction } from 'src/app/model/transaction.model';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-transactions-home',
  templateUrl: './transactions-home.component.html',
  styleUrls: ['./transactions-home.component.css']
})
export class TransactionsHomeComponent implements OnInit {

  userData;
  accounts:Account[];
  transactions:Transaction[];
  checkingTransactions:Transaction[];
  savingsTransactions:Transaction[];
  userSavingAccount:Account;
  userCheckingAccount:Account;

  constructor(private route: ActivatedRoute,private service: MainServiceService,private router:Router) {
    this.userData = this.router.getCurrentNavigation().extras.state;

  }

  ngOnInit(): void {
    const userObservable = this.service.getAccountByUserId(localStorage.getItem('currentUser'));
    userObservable.subscribe((accountData :Account[])=>{
      this.accounts=accountData;
      this.userSavingAccount=this.accounts.find(acc => acc.accountType=="saving");
      this.userCheckingAccount=this.accounts.find(acc=> acc.accountType=="checking");
    });
    const transactionsObservable = this.service.getTransactionsById(localStorage.getItem('currentUser'));
    transactionsObservable.subscribe((transactionData :Transaction[])=>{
      this.transactions=transactionData;
      this.checkingTransactions=this.transactions.filter(tran => tran.accountNumber==this.userCheckingAccount.accountNumber);
      this.savingsTransactions=this.transactions.filter(tran => tran.accountNumber==this.userSavingAccount.accountNumber);
    });

  }

}
