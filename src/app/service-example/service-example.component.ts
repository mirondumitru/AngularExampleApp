import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/services/inputService';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  inputViewText:string;

  constructor(inputService:InputService) { 
    this.inputViewText = inputService.generateInputText();
  }

  ngOnInit() {
  }

}
