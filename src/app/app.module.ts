import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { TransactionsModule } from './transactions/transactions.module';
import { LoginModule } from './login/login.module';
import { CreateModule } from './create/create.module';
import { DepositModule } from './deposit/deposit.module';
import { LogModule } from './log/log.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AccountModule,
    TransactionsModule,
    LoginModule,
    CreateModule,
    DepositModule,
    LogModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
