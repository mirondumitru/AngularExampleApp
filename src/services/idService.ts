import { Injectable } from "@angular/core";

@Injectable()
export class IdService {
    getId():number{
        return Math.floor(Math.random() * 100);
    }
}