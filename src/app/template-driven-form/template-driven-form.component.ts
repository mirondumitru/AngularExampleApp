import { Component, OnInit } from '@angular/core';
import { Car } from 'src/classes/car';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  car:Car;

  engines = ['Gasoline', 'Diesel', 'Hybrid', 'Full-Electric'];

  constructor() { 
    this.car = new Car(); 

    this.car.manufacturer = "Mercedes";
    this.car.engine ="Diesel";
    this.car.vin = "ASDT112445FASAGTT";
    this.car.forSale = true;
    this.car.year = 1993;
  }

  onSubmit(){
    console.log(this.car);
  }

  ngOnInit() {
  }

}
