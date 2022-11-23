import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemModel } from 'src/app/items/_modules/item.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient,) { }
  itemModel: ItemModel
  getAllProduct(): Promise<any> {
    return this.http.get(environment['apiBaseUrl'] + 'products')
      .toPromise()
      .catch(err => {
        return err;
      });
  }
  getPaginationProduct(Pagenum: number, limit: number): Promise<any> {
    return this.http.get(environment['apiBaseUrl'] + `products/?limit=${limit}&skip=${Pagenum}`)
      .toPromise()
      .catch(err => {
        return err;
      });
  }
  SingleProduct(itemId: number): Promise<any> {
    return this.http.get(environment['apiBaseUrl'] + `products/${itemId}`)
      .toPromise()
      .catch(err => {
        return err;
      });
  }
  SearchProduct(SearchValue: number): Promise<any> {
    return this.http.get(environment['apiBaseUrl'] + `products/search?q=${SearchValue}`)
      .toPromise()
      .catch(err => {
        return err;
      });
  }
  ProductCategory(): Promise<any> {
    return this.http.get(environment['apiBaseUrl'] + 'products')
      .toPromise()
      .catch(err => {
        return err;
      });
  }
  GetProductOfCategory(): Promise<any> {
    return this.http.get(environment['apiBaseUrl'] + 'products/categories')
      .toPromise()
      .catch(err => {
        return err;
      });
  }
  FillterProductOfCategory(Fillter: any): Promise<any> {
    return this.http.get(environment['apiBaseUrl'] + `products/category/${Fillter}`)
      .toPromise()
      .catch(err => {
        return err;
      });
  }
}