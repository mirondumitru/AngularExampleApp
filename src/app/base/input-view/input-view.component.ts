import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-input-view',
  templateUrl: './input-view.component.html',
  styleUrls: ['./input-view.component.css']
})
export class InputViewComponent implements OnInit {

  @Input()
  inputText: string;
  
  constructor() { 
    console.log("constructed input view")
  }

  ngOnInit() {
  }
}
