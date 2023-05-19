import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  counter:number=0;
  constructor(private counterserv:CounterService){}

  ngOnInit(){
    this.counterserv.counterval.subscribe(res=>{this.counter=res});
  }

}
