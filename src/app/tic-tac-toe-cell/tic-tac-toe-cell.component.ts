import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellValue } from 'src/classes/ticTacToeValues';

@Component({
  selector: 'app-tic-tac-toe-cell',
  templateUrl: './tic-tac-toe-cell.component.html',
  styleUrls: ['./tic-tac-toe-cell.component.css']
})
export class TicTacToeCellComponent implements OnInit {

  @Input()
  set value(val:CellValue){
    if(val==CellValue.O) {
      this.cellClassValue = 'oSelected'
      return;
    }

    if(val == CellValue.X) {
      this.cellClassValue = 'xSelected'
      return;
    }

    this.currentValue = val;
  }

  @Input()
  column: number;

  @Input()
  line: number;

  @Output()
  cellClicked:EventEmitter<number[]> = new EventEmitter();

  cellClassValue: string;

  currentValue: CellValue;

  constructor() { 
   
  }

  cellClick(){
    console.log("cell click on " + this.line + " " + this.column);

    if (this.currentValue == CellValue.Unknown) {
      this.cellClicked.emit([this.line, this.column]);
    }
  }


  ngOnInit() {
  }

}
