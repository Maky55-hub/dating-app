import { NgModule } from '@angular/core';
import * as ApiServiceProxies from './service-proxies';


@NgModule({
  providers: [
    ApiServiceProxies.UsersServiceProxy,
    ApiServiceProxies.AccountServiceProxy
  ]
})
export class ServiceProxyModule { }
