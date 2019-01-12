import { Component, OnInit } from '@angular/core';
import { of, from, Scheduler, fromEvent, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable-exercise',
  templateUrl: './observable-exercise.component.html',
  styleUrls: ['./observable-exercise.component.css']
})
export class ObservableExerciseComponent implements OnInit {

  subscription: Subscription;

  constructor() {

    var obervable = of("abc", undefined, "bd", "a")

    var makeSquare = map((val: string) => val.length);
    var excludeOdds = filter((val: number) => val % 2 == 0);

    var subscribeHandlers = {
      next: x => console.log(x.length),
      error: err => { console.log(err) },
      complete: () => { console.log("completed") }
    }

    obervable.subscribe(subscribeHandlers);

    // var subscription = obervable.subscribe(subscribeHandlers);

    // setTimeout(() => {
    //   subscription.unsubscribe()
    // }, 5000);
  }

  ngOnInit() {
    console.log("Observable init : :D ");

    this.subscription = this.subscribeInputClear();

    var checkBox = document.getElementById('clearOnESC') as HTMLInputElement;
    var observable = fromEvent(checkBox, 'change');

    observable.subscribe((event: any) => {
      if (event.target.checked) {
        this.subscription = this.subscribeInputClear();
      }
      else {
        this.subscription.unsubscribe();
      }
    });
  }

  subscribeInputClear():Subscription {
    var nameInput = document.getElementById('name') as HTMLInputElement;
    var observable = fromEvent(nameInput, 'keydown');

    var subscription =  observable.subscribe((e: any) => {
      if (e.keyCode === 27) {
        nameInput.value = '';
      }
    });

    return subscription;
  }
}