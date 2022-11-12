
import { Component, Input, OnDestroy, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, Subscription, tap } from 'rxjs';
import { ProductService } from '../service/product.service';
import { IProductResponse } from '../types/product-response';
import { IProduct } from '../types/product.interface';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit,OnDestroy {
  
  productList: IProduct[] = [];
  productSubscription !:Subscription;
  constructor(private router: Router, 
              private _productService : ProductService) { }

  ngOnInit(): void {
   this.productSubscription = this._productService.getAllProduct().pipe(
      map((response:IProductResponse)=>{
        return response.products;
      })
    ).subscribe(({
      next:products=>this.productList = products
    }))


  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }

  
}
