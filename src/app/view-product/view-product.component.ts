
import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {
  
  productList: any = [];
  constructor(private router: Router, 
              private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  async getAllProduct() {
    this.httpProvider.getAllProduct().subscribe((data : any) => {
      console.table(data.body.products)
      let products = data.body.products
      if (data != null && products != null) {
        var resultData = products;
        if (resultData) {
          this.productList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.productList = [];
            }
          }
        }
      });
  }

  
}
