import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() card !:Product;

counter:number=0;
  constructor(private route:Router ,private counterserv:CounterService){}

 moveto(id:number){
  console.log(id);
  this.route.navigate(['detail',id]);
  
 }

 ngOnInit(){
  this.counterserv.counterval.subscribe(res=>{this.counter=res});
}

 

 addtochart(){
    
       if(this.card.cart==false && this.card.stock >0){
        this.counterserv.changecounter(++this.counter);
        this.counterserv.setarray(this.card.id ,0);
        console.log(this.counterserv.getarray());
        
        this.card.cart=true;
       }
    
     
 }
 
} 
