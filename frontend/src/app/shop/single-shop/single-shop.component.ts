import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shop } from 'src/app/models/shop.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-shop',
  templateUrl: './single-shop.component.html',
  styleUrls: ['./single-shop.component.css']
})
export class SingleShopComponent implements OnInit {

  code:string;
  infoNegozio = new Shop();

  constructor(protected route: ActivatedRoute, protected dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.code = params.get('code')
      this.dataService.getSingleShop(this.code).subscribe(
        (negozio) =>{
            this.infoNegozio = negozio
        }
        );
    });
  }
  buy(item){
    alert(`sul serio vuoi comprare ${item.name} per ${item.price}? sei scemo?`)
  }

}
