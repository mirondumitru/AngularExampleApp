import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'input-view',
  styleUrls: ['./input-view.component.css'],
  templateUrl: './input-view.component.html',
})
export class InputViewComponent {

  @Input()
  text: string;
  
  @Input()
  otherNumber: number;

  constructor() { 
   
  }
}
