import { Component, OnInit } from '@angular/core';
import { Car } from 'src/classes/car';
import { CarService } from '../car.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;
  isLoading: boolean;

  constructor(private service: CarService, private router:Router) {
    this.car = new Car();
   }

  ngOnInit() {
  }

  saveCar(car: Car): void {
    this.isLoading = true;
    this.service.save(car).subscribe(x=>{
      this.car = new Car();
      this.isLoading = false;
      this.router.navigate(['/car-list']);
    });
  }
}
