import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.css']
})
export class MiniatureComponent implements OnInit {

  constructor(protected data:DataService) { }

  miniatureAll:any[];
  miniatureShow:any[];

  ngOnInit(): void {
    this.data.getMiniatures().subscribe((miniature)=>{
        this.miniatureAll = miniature;
        this.miniatureShow= this.miniatureAll;
      }
    );
  }

}
