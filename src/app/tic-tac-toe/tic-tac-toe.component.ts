import { Component, OnInit } from '@angular/core';
import { CellValue } from 'src/classes/ticTacToeValues';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  table: CellValue[][];

  currentTurn: CellValue;

  constructor() { 
    this.initValues();
  }

  initValues(){
    this.table = [];

    this.table.push([CellValue.Unknown, CellValue.Unknown,CellValue.Unknown]);
    this.table.push([CellValue.Unknown, CellValue.Unknown,CellValue.Unknown]);
    this.table.push([CellValue.Unknown, CellValue.Unknown,CellValue.Unknown]);

    console.log(this.table);

    this.currentTurn = CellValue.X;
  }

  cellUpdate(position:number[]){

    this.table[position[0]][position[1]] = this.currentTurn;

    if (this.currentTurn == CellValue.X){
      this.currentTurn = CellValue.O;
    }
    else if (this.currentTurn == CellValue.O){
      this.currentTurn = CellValue.X;
    }

    this.checkWinner();
    console.log(this.table);
  }

  checkWinner() {
    for(var i=0;i<3;i++){
      if (this.table[i][0] == this.table[i][1] 
        && this.table[i][1] == this.table[i][2] && this.table[i][2] == CellValue.X) {
        this.alertWinner(CellValue.X);
      }
      else if (this.table[i][0] == this.table[i][1] 
        && this.table[i][1] == this.table[i][2] && this.table[i][2] == CellValue.O) {
        this.alertWinner(CellValue.O);
      }
    }

    for(var i=0;i<3;i++){
      if (this.table[0][i] == this.table[1][i] 
        && this.table[1][i] == this.table[2][i] && this.table[2][i] == CellValue.X) {
        this.alertWinner(CellValue.X);
      }
      else  if (this.table[0][i] == this.table[1][i] 
        && this.table[1][i] == this.table[2][i] && this.table[2][i] == CellValue.O) {
         this.alertWinner(CellValue.O);
      }
    }

    if (this.table[0][0] == this.table[1][1] 
      && this.table[1][1] == this.table[2][2] && this.table[2][2] == CellValue.X) {
      this.alertWinner(CellValue.X);
    }

    if (this.table[0][2] == this.table[1][1] 
      && this.table[1][1] == this.table[2][0] && this.table[2][0] == CellValue.X) {
      this.alertWinner(CellValue.X);
    }

    if (this.table[0][0] == this.table[1][1] 
      && this.table[1][1] == this.table[2][2] && this.table[2][2] == CellValue.O) {
      this.alertWinner(CellValue.O);
    }

    if (this.table[0][2] == this.table[1][1] 
      && this.table[1][1] == this.table[2][0] && this.table[2][0] == CellValue.O) {
      this.alertWinner(CellValue.O);
    }
    
  }

  alertWinner(val:CellValue){
    var winner = '';
    if (val == CellValue.X){
      winner = "X";
    }
    else if(val == CellValue.O){
      winner = "O";
    }
    setTimeout(()=>{
      alert("We have a winner : " + winner);
      this.initValues();
    },0);
  }

  ngOnInit() {
  }
}
