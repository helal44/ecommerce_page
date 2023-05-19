import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import *  as data from '../product/products-list.json' ;
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  item:any;
 products:Product[]=(data as any).default;

 counter:number=0;

  constructor(private activeroute:ActivatedRoute , private counterserv:CounterService){}
  ngOnInit(){

    this.item=this.products.find(item=>item.id==this.activeroute.snapshot.params['id']);

    this.counterserv.counterval.subscribe(res=>{this.counter=res});

  }

  addtochart(){
    
    if(this.item.cart==false && this.item.stock >0){
     this.counterserv.changecounter(++this.counter);
     this.counterserv.setarray(this.item.id,0);
     this.item.cart=true;
    }
 
  
}

}
