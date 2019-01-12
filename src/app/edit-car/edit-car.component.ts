import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/classes/car';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  car: Car;
  id: string;
  isLoading: boolean;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.loadCar();
  }


  private loadCar() {
    this.isLoading = true;
    
    this.carService.getById(this.id).subscribe(x => {
    this.isLoading = false;
      this.car = x;
    });
  }

  update(car: Car): void {
    this.isLoading = true;
    this.carService.update(this.id, car).subscribe(x => {
      this.loadCar();
      this.router.navigate(['/car-list']);
    });
  }

}
