import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginDto, AccountServiceProxy, UserDto } from '../shared/service-proxies/service-proxies';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserSource: ReplaySubject<UserDto> = new ReplaySubject<UserDto>(1);
  public currentUser$: Observable<UserDto> = this.currentUserSource.asObservable();

  constructor(private _accountServiceProxy: AccountServiceProxy) { }

  login(loginDto: LoginDto): Observable<UserDto> {
    return this._accountServiceProxy.login(loginDto)
    .pipe(
      map(userDto => {
        if (userDto) {
          localStorage.setItem('user', JSON.stringify(userDto));
          this.currentUserSource.next(userDto);
        }
        return userDto;
    })
    );
  }

  setCurrentUser(userDto: UserDto): void {
    this.currentUserSource.next(userDto);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
