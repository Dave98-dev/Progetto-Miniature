import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './mainSite/home/home.component';
import { MiniatureComponent } from './mainSite/miniature/miniature.component';
import { AboutUsComponent } from './mainSite/about-us/about-us.component';
import { ContattaciComponent } from './mainSite/contattaci/contattaci.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './mainSite/main/main.component';
import { SingleShopComponent } from './shop/single-shop/single-shop.component';
import { SocialBarComponent } from './social/social-bar/social-bar.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider
} from 'angularx-social-login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniatureComponent,
    AboutUsComponent,
    ContattaciComponent,
    MainComponent,
    SingleShopComponent,
    SocialBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule, FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1026087064577-o3go8crp8dhu1tlt195b40ihjrsgjacq.apps.googleusercontent.com'
            ),
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
