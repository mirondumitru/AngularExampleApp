import { Injectable } from "@angular/core";

@Injectable()
export class InputService {
    generateInputText(): string {
        var id = Math.random() * 100;
        return "Input string for ID " + Math.floor(id);
    }
}