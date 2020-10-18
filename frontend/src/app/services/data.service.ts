import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http:HttpClient) { }

  getMiniatures():Observable<any>{
    return this.http.get("https://picsum.photos/v2/list");
  }
}
