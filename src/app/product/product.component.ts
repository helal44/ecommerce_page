import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import * as data from './products-list.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

 
  products:Product[]=(data as any).default;
 

}
