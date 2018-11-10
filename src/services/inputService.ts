import { Injectable } from "@angular/core";
import { IdService } from "./idService";

@Injectable()
export class InputService {

    idService: IdService;

    constructor(idService:IdService) {
        this.idService = idService;
    }

    generateInputText(): string {
        var id = this.idService.getId();
        return "Input string for ID " + id;
    }

    saveInput(input:string): void{

    }

}