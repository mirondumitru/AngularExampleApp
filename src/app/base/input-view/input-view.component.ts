import { Component, OnInit, Input, Output } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'input-view',
  styleUrls: ['./input-view.component.css'],
  templateUrl: './input-view.component.html',
})
export class InputViewComponent {
  
  @Input()
  inputNumber: number;

  @Output()
  onSomething: EventEmitter<number> = new EventEmitter();

  constructor() { 
  }

  emitMyNumber()  {
    console.log('[child] emit value: '+ this.inputNumber);
    this.onSomething.emit(this.inputNumber);
  }
}
