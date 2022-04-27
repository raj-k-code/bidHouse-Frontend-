import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public addProduct(productDeatails: any) {
    let addProductApi = "https://real-bidhouse.herokuapp.com/product/add-product"
    return this.http.post<any>(addProductApi, productDeatails);
  }

  public viewProduct() {
    let viewProductApi = "https://real-bidhouse.herokuapp.com/product/product-list"
    return this.http.get<any>(viewProductApi);
  }

  public viewProductBySeller() {
    let viewProductBySellerApi = "https://real-bidhouse.herokuapp.com/product/product-list-by-seller"
    return this.http.post<any>(viewProductBySellerApi, { creatorId: sessionStorage.getItem("_id") });
  }

  public viewProductById(productId: any) {
    let viewProductByIdApi = "https://real-bidhouse.herokuapp.com/product/product-by-id"
    return this.http.post<any>(viewProductByIdApi, { productId: productId });
  }

  public updateProduct(productDeatails: any) {
    let updateProductApi = "https://real-bidhouse.herokuapp.com/product/edit-product"
    return this.http.post<any>(updateProductApi, productDeatails);
  }

  public delete(productId: any) {
    let deleteProductApi = "https://real-bidhouse.herokuapp.com/product/delete-product"
    return this.http.post<any>(deleteProductApi, { productId: productId });
  }

  public viewCategory() {
    let viewcategoryApi = "https://real-bidhouse.herokuapp.com/admin/category-list"
    return this.http.get<any>(viewcategoryApi);
  }

  public search(text: any) {
    let searchApi = "https://real-bidhouse.herokuapp.com/product/product-search"
    return this.http.post<any>(searchApi, { searchText: text });
  }


  public viewProductSimilar(categoryName: any, productId: any) {
    let viewProductSimilarApi = "http://localhost:3000/product/product-list-similar"
    return this.http.post<any>(viewProductSimilarApi, { categoryName: categoryName, productId: productId });
  }

  public viewProductByCategory(categoryName: any) {
    let viewProductByCategoryApi = "http://localhost:3000/product/product-list-category"
    return this.http.post<any>(viewProductByCategoryApi, { categoryName: categoryName });
  }
}

