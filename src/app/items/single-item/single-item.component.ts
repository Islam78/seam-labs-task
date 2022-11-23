import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from '../_modules/item.model';
import { GetProductService } from '../_services/get-product.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  id: number;
  item: ItemModel;
  QtyValue: number = 0;
  stars: any[] = [];
  SelectImg: string;
  constructor(private route: ActivatedRoute, private productSer: GetProductService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getProductPages()
  }

  getProductPages() {
    this.productSer.SingleProduct(this.id).then(data => {
      if (data) {
        this.initData(data)
      }
    })
      .catch(err => console.log(err))
  }

  initData(data: any) {
    this.item = data
    this.stars = data.rating
    this.makeStare(data.rating)
    this.SelectImg = data.images[0]
  }
  
  makeStare(rating: number) {
    console.log(Math.floor(rating));
    for (let index = 1; index <= Math.floor(rating); index++) {
      let result: any[] = []
      result.push(index)
      this.stars = [...result]
      console.log(this.stars)
    }
    console.log(this.stars)
  }

  ChangeImg(img: string) {
    this.SelectImg = img
  }

  ChangeQty(type: Boolean) {
    if (type) {
      this.QtyValue += 1
    } else {
      if (this.QtyValue > 0) this.QtyValue -= 1
    }
  }

}
