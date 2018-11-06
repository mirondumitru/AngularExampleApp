import { Injectable } from "@angular/core";

@Injectable()
export class InputService {
    getInputText(id: number): string {
        return "Input string for ID "+id;
    }
}