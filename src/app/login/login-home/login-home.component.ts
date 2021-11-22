import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  constructor(private service:MainServiceService,private router: Router) { }

  email:string;
  password:string;
  users:User[];
  currentUser:User;

  ngOnInit(): void {
    const userObservable = this.service.getUsers();
    userObservable.subscribe((userData :User[])=>{
      this.users=userData;
    })
  }

  @ViewChild('f', { static: false }) signupForm: NgForm;

  login(){
    this.email=this.signupForm.value.email;
    this.password=this.signupForm.value.password;

    this.currentUser=this.users.find(usr=> usr.email==this.email);

    console.log(this.currentUser);
    if(this.currentUser!=null && this.currentUser.password==this.password){
       this.router.navigateByUrl("/home")
    }

    
    
  }

}
