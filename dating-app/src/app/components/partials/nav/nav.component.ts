import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../../shared/service-proxies/service-proxies';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public loginFormModel: LoginDto = new LoginDto();

  constructor(public accountService: AccountService) { }

  async loginAsync(): Promise<void> {
    try {
      await this.accountService.login(this.loginFormModel).toPromise();
    } catch (error) {
      console.log(error.message);
    }
  }

  logout(): void {
    this.accountService.logout();
  }

  ngOnInit() {
  }

}
