import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { Shop } from 'src/app/models/shop.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: SocialAuthService, private dataService:DataService) { }
  
  user:any;
  loggedIn:boolean;

  public model = new Shop();

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      localStorage.setItem('user', JSON.stringify(user));
    });
  }
  submit(event){
    this.model.author = this.user.authToken;
    this.dataService.postShop(this.model).subscribe(()=>alert('sent'));
  }

}
