import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Shop } from '../models/shop.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http:HttpClient) { }

  getMiniatures():Observable<any>{
    return this.http.get("https://picsum.photos/v2/list");
  }

  getSingleShop(shopCode:string):Observable<Shop>{

    const url = environment.API_URL;

    return this.http.get<Shop>(`${url}/shop/${shopCode}`);
  }
}
