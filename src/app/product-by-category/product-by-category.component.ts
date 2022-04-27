import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  categoryName: any;
  productList: any;
  typeSelected: any;
  page: any;


  constructor(private route: ActivatedRoute, private prductService: ProductService, private spinnerService: NgxSpinnerService) {
    this.typeSelected = 'ball-fussion';

    console.log(this.route.snapshot.queryParamMap.get('categoryName'))
    this.categoryName = this.route.snapshot.queryParamMap.get('categoryName');

    this.prductService.viewProductByCategory(this.categoryName).subscribe(data => {
      this.productList = data
    });
  }



  // public showSpinner(): void {
  //   this.spinnerService.show();

  //   setTimeout(() => {
  //     this.spinnerService.hide();
  //   }, 5000); // 5 seconds
  // }



  ngOnInit(): void {
    // this.location.replace("/product-by-category/");


    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000); // 5 seconds
  }

}
