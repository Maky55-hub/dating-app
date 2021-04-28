import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_BASE_URL } from './shared/service-proxies/service-proxies';
import { AppConsts } from './shared/AppConsts';
import { ServiceProxyModule } from './shared/service-proxies/service-proxy.module';

function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceProxyModule
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useFactory: getRemoteServiceBaseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
