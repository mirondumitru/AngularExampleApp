import { Injectable } from "@angular/core";
import { IdService } from "./idService";
import { Car } from "src/classes/car";

@Injectable()
export class CarService {
    getCar(): Car {
        var car = new Car();

        car.manufacturer = "Mercedes";
        car.engine = "Diesel";
        car.vin = "ASDT112445FASAGTT";
        car.forSale = true;
        car.year = 1993;

        return car;
    }

    saveCar(car: Car): void {
       console.log(car);
    }
}

@Injectable()
export class GarageService {

    idService: IdService;

    constructor(idService: IdService) {
        this.idService = idService;
    }

    changeOil(car: Car): void {
        //  car.oilChanged = true;
    }

    generateInputText(): string {
        var id = this.idService.getId();
        return "Input string for ID " + id;
    }

    saveInput(input: string): void {

    }
}