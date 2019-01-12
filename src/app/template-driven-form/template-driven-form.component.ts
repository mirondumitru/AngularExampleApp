import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/classes/car';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  engines = ['Gasoline', 'Diesel', 'Hybrid', 'Full-Electric'];

  @Input()
  car:Car;

  @Output()
  submit: EventEmitter<Car> = new EventEmitter();

  constructor() { 
   
  }

  onSubmit(){
    this.submit.emit(this.car);
  }

  ngOnInit() {
  }

}
