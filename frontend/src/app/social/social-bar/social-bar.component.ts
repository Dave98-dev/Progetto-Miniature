import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, VKLoginProvider } from "angularx-social-login";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SocialBarComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  user:any;
  loggedIn:boolean;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      localStorage.setItem('user', JSON.stringify(user));
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOutFromGoogle():void{
    this.authService.signOut();
  }

}
