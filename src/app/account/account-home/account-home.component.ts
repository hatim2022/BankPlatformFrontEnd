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
  originAccount;
  destinationAccount;
  
  constructor(private route: ActivatedRoute,private service: MainServiceService,private router:Router) {
    this.userData = this.router.getCurrentNavigation().extras.state;
    const userObservable = this.service.getAccountByUserId(localStorage.getItem('currentUser'));
    userObservable.subscribe((accountData :Account[])=>{
      this.accounts=accountData;
    });
     
  }
  
  
  @ViewChild('f', { static: false }) Form: NgForm;

  onSubmit(){
    this.originAccount=this.Form.value.originAccount;
    this.destinationAccount=this.Form.value.destinationAccount;
    console.log(this.originAccount)
  }

  ngOnInit(): void {
  }

}
