import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/model/account.model';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-transactions-home',
  templateUrl: './transactions-home.component.html',
  styleUrls: ['./transactions-home.component.css']
})
export class TransactionsHomeComponent implements OnInit {

  userData;
  accounts:Account[];
  
  constructor(private route: ActivatedRoute,private service: MainServiceService,private router:Router) {

  }

  ngOnInit(): void {
  }

}
