import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_BASE_URL } from './shared/service-proxies/service-proxies';
import { AppConsts } from './shared/AppConsts';
import { ServiceProxyModule } from './shared/service-proxies/service-proxy.module';
import { NavComponent } from './components/partials/nav/nav.component';

function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceProxyModule,
    FormsModule
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
