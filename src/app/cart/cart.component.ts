import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
import * as data from '../product/products-list.json';

import { Product } from '../interfaces/product';
import { iif } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

    counter:number=0;

    totalprice:number=0;

    products:Product[]=(data as any).default;

  constructor(private counterserv:CounterService){
  }

    ngOnInit(){
      this.counterserv.counterval.subscribe(res=>{this.counter=res});
     
    }

    array=this.counterserv.getarray();

  
        decrease(val:any,card:any){

            if(val.count>0){
            
              this.totalprice = this.totalprice - card.price;
              val.count--;
            }
        

        }

        increase(val:any,card:any){

            if( val.count < card.stock){
                val.count++;
              this.totalprice +=  card.price;
            
            
            }

        }

        index:number=0;
        delete(val:any,card:any){

          this.index=this.products.findIndex(i=>{

            return i.id==val.id;
          })

          this.products.splice(this.index,1);
          this.totalprice-=(val.count * card.price);

          this.counterserv.changecounter(--this.counter);
          console.log(this.index);
          

        }

   

   


}
