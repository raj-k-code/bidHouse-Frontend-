import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  categoryList: any;
  productList: any;
  page: any;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.viewCategory().subscribe(data => {
      this.categoryList = data;
    });

    this.productService.viewProduct().subscribe(product => {
      this.productList = product;
    });
  }

  public productByCategory(categoryName: any) {
    this.router.navigate(['product-by-category'], { queryParams: { categoryName: categoryName }, queryParamsHandling: "merge" });

  }



  ngOnInit(): void {
  }

}
