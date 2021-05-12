import { Component, OnInit } from '@angular/core';
import { UserDto, UsersServiceProxy } from './shared/service-proxies/service-proxies';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private _userServiceProxy: UsersServiceProxy,
    private _accountService: AccountService
  ) {}

  setCurrentUser(): void {
    const user: UserDto = JSON.parse(localStorage.getItem('user'));
    this._accountService.setCurrentUser(user);
  }

  ngOnInit(): void {
    let users = this._userServiceProxy.users().toPromise();
    this.setCurrentUser();
  }

}
