import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from 'src/classes/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  isLoading: boolean;
  carList: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  private getCars() {
    this.isLoading = true;
    this.carService.getAll().subscribe(res => {
      this.isLoading = false;
      this.carList = res;
    });
  }

  delete(id:string){
    this.isLoading = true;
    this.carService.delete(id).subscribe(x=>{
      this.getCars();
    })
  }
}
