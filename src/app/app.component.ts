import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankPlatformFrontEnd';
  user:any;

  constructor(public _router: Router) { 
    console.log(this._router.url)
  }

    ngOnInit(): void {
      this.user = localStorage.getItem('currentUser');
    }


    logout(){
      localStorage.removeItem('currentUser');
      this.user=null;
      localStorage.clear();
      console.log(this.user)
      this._router.navigateByUrl("/login");
    }

  }


