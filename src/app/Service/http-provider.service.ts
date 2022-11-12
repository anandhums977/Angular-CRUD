import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "https://dummyjson.com/";
//https://dummyjson.com/products

var httpLink = {
  getAllProduct: apiUrl + "products",
}
@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllProduct(): Observable<any> {
    return this.webApiService.get(httpLink.getAllProduct);
  }
 
}                          