import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.css']
})
export class MiniatureComponent implements OnInit {

  constructor(protected data:DataService) { }

  shops:any[];
  ngOnInit(): void {
    this.data.getShops().subscribe((shops)=>{
      this.shops = shops;
    });
  }

}
