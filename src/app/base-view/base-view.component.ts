import { Component, OnInit } from '@angular/core';
import { Car } from 'src/classes/car';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent {
 
  textModel:string;

  shouldHaveBoldText:boolean;

  currentClasses:{};

  employee:Employee;

  carList:any[];

  car:Car;

  constructor(){
    // this.garage = garage;
    // this.car = new Car();
    // this.car.model = "BMW";
    // this.car.vin= "ASDT112445FASAGTTE";
    // this.car.oilChanged = false;

  }

  changeOil() {
    console.log("before: ");
  //  console.log(this.car.oilChanged);



    // console.log("after: ");
    // console.log(this.car.oilChanged);

    // setTimeout(x=>{
    //   this.car.oilChanged = false;
    // }, 2000)
  }

  inputViewText: string;


  useDefaultClasses()  {
    this.currentClasses = {
      'saveable':false,
      'modified' :true,
      'special' :false
    }
  }

  bindCars()  {
    this.carList.push({
      "model": "BMW",
      "desc": "cool car"
    });

    this.carList.push({
      "model":"Mercedes",
      "desc": "another cool car"
    });

    this.carList.push({
      "model":"Dacia",
      "desc": "not cool car"
    });
  }

    logMessage(message:string) {
      console.log(message);
    }
}

export class Employee{
  firstName:string;
  lastName:string;

  constructor(fName:string, lName:string) {
    this.firstName = fName;
    this.lastName = lName;
  }
}
