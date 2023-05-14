import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:Product[]=[
    {"id":1, "name":'mm',"desc":'mmmmmmmmmm',"price":200,"number":2 ,"img":'assets/img/x1.jpg'},
    {"id":1, "name":'mm',"desc":'mmmmmmmmmm',"price":200,"number":2 ,"img":'assets/img/x2.jpg'},
    {"id":1, "name":'mm',"desc":'mmmmmmmmmm',"price":200,"number":5,"img":'assets/img/x1.jpg'},
    {"id":1, "name":'mm',"desc":'mmmmmmmmmm',"price":200,"number":6 ,"img":'assets/img/x1.jpg'},
    {"id":1, "name":'mm',"desc":'mmmmmmmmmm',"price":200,"number":0, "img":'assets/img/x1.jpg'},
  ]

}
