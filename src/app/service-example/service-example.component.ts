import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/services/inputService';
import { IdService } from 'src/services/idService';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  idService:IdService;

  prop1:number;
  prop2:number;
  prop3:number;


  constructor(idService:IdService) { 
    this.idService = idService;

    this.prop1 = this.idService.getId();
    this.prop2 = this.idService.getId();
    this.prop3 = this.idService.getId();
  }

  ngOnInit() {
  }

  eventEmitted(value: number): void{
    console.log('[parent] got value: '+value);
    alert(value);
  }
}
