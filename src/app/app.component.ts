import { Component } from '@angular/core';
import { AppComponentModel } from 'src/classes/appComponentModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private router:Router;

  constructor(router: Router)  {
    this.router = router;
  }

  routeTo(route:string)   {
    this.router.navigate([route]);
  }
  
}
