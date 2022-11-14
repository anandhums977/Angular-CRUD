import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductResponse } from '../types/product-response';


const apiUrl = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http:HttpClient) { }

  public getAllProduct(): Observable<IProductResponse> {
    return this._http.get<IProductResponse>(`${apiUrl}products`);
  }

}                          