import { Component } from '@angular/core';
import { AppComponentModel } from 'src/classes/appComponentModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  textModel:string;

  shouldHaveBoldText:boolean;

  currentClasses:{};

  employee:Employee;

  carList:any[];

  constructor() {
    this.textModel = "ngModelText";

    this.shouldHaveBoldText = true;
   
    this.useDefaultClasses();

    // comment the line below to see ngIf functionality
    this.employee = new Employee("John", "Doe");

    this.carList = [];
    this.bindCars();
  }

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
