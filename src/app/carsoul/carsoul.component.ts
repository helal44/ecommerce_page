import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-carsoul',
  templateUrl: './carsoul.component.html',
  styleUrls: ['./carsoul.component.css']
})
export class CarsoulComponent {

  @Input() slider:any;
 

}
