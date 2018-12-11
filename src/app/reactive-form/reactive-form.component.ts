import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Car } from 'src/classes/car';
import { CarService } from 'src/services/inputService';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  car: Car;
  carForm: FormGroup;
  carVersions: Car[] = [];

  engines = ['Gasoline', 'Diesel', 'Hybrid', 'Full-Electric'];
  formBuilder: FormBuilder;

  constructor(fb: FormBuilder, carService: CarService) {
    this.formBuilder = fb;

    this.car = carService.getCar();

    this.carForm = this.formBuilder.group({
      manufacturer: [this.car.manufacturer, Validators.required],
      engine: [this.car.engine, Validators.required],
      vin: [this.car.vin, Validators.compose([Validators.required, Validators.minLength(17), Validators.maxLength(17)])],
      forSale: [this.car.forSale, Validators.required],
      year: [this.car.year],
    });

    this.logChanges();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.car = this.carForm.value;

    console.log(this.car);

    console.log(this.carVersions);
  }

  logChanges() {
    var mapValue = map((value: any) => {
      var time = new Date();
      var message = time + ': ' + JSON.stringify(value)
      return message;
    });

    mapValue(this.carForm.valueChanges).subscribe(
      (car: string) => {
        console.log(car);
      }
    );


    this.carForm.valueChanges.subscribe((car: any) => {
      this.carVersions.push(car);
    });
  }

  resetForm() {
    this.carForm.reset(this.car);
  }
}

