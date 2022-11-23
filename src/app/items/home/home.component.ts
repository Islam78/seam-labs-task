import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../_modules/category.model';
import { ItemModel } from '../_modules/item.model';
import { GetProductService } from '../_services/get-product.service';

@Component({
  selector: 'app-home',
  templateUrl:
    './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ProductsItem: ItemModel[];
  category: Category[];
  PageNumber: number;
  totalItems: number;
  limit: number;
  SearchValue: number;
  gategoryFillter: any
  constructor(private productSer: GetProductService, private route: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategory()
  }
  fillterCategory() {

  }

  getAllProducts() {
    this.productSer.getAllProduct().then(data => {
      this.setNewProducts(data)
    })
      .catch(err => console.log(err))
  }
  getProductPages(Pagenum: number, limit: number) {
    this.productSer.getPaginationProduct(Pagenum, limit).then(data => {
      console.log(data);
      if (data) {
        this.setNewProducts(data)
      }
    })
      .catch(err => console.log(err))
  }
  fillterProduct() {
    console.log(this.SearchValue);

    this.productSer.SearchProduct(this.SearchValue).then(data => {
      console.log(data);
      if (data) {
        this.setNewProducts(data)
      }
    })
      .catch(err => console.log(err))
  }
  getCategory() {
    this.productSer.GetProductOfCategory().then(data => {
      console.log(data);
      if (data) {
        this.category = data
      }
    })
      .catch(err => console.log(err))
  }
  FillterWithCategory(category: any) {
    this.productSer.FillterProductOfCategory(category).then(data => {
      console.log(data);
      if (data) {
        // this.category = data
        this.setNewProducts(data)
        console.log(data);

      }
    })
      .catch(err => console.log(err))
  }
  setNewProducts(data: any) {
    console.log(data);
    this.ProductsItem = data.products
    this.PageNumber = data.skip;
    this.totalItems = data.total;
    this.limit = data.limit
  }
  SelectItem(itemId: number) {
    this.route.navigate(['item', itemId]);
  }
  ChangePage(PageNumber: number) { this.getProductPages(PageNumber, this.limit) }

}
