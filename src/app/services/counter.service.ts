import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter =new BehaviorSubject(0);
  counterval=this.counter.asObservable();

   array=[{
    id:0,
    count:0
   }];

  constructor() { }

  changecounter(val:number){
    this.counter.next(val);

  }

  setarray(id:number,count:number){
   this.array.push({id:id,count:count});
      
      }
  getarray(){
    return this.array;
  }
}
