export enum AccountType {
  CHECKING,
  SAVING,
}
export class Account {
    accountNumber: Number;
    userId: Number;
    accountType: AccountType;
    balance: Number;
}
