import { Component, OnInit } from '@angular/core';
import { UsersServiceProxy } from './shared/service-proxies/service-proxies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _userServiceProxy: UsersServiceProxy) {}

  ngOnInit(): void {
    let user = this._userServiceProxy.users().toPromise();
  }
}
