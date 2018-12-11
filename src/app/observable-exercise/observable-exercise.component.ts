import { Component, OnInit } from '@angular/core';
import { of, from, Scheduler, fromEvent, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-exercise',
  templateUrl: './observable-exercise.component.html',
  styleUrls: ['./observable-exercise.component.css']
})
export class ObservableExerciseComponent implements OnInit {

  subscription: Subscription;

  clearOnESC: boolean;

  constructor() {
    this.clearOnESC = true;

    var obervable = of(1, 2, 3, 4, 5)

    var makeSquare = map((val: number) => val * val);
    var excludeOdds = filter((val: number) => val % 2 == 0);

    var subscribeHandlers = {
      next: x => console.log(x),
      error: err => { console.log(err.message) },
      complete: () => { console.log("completed") }
    }

    obervable.pipe(excludeOdds, makeSquare).subscribe(subscribeHandlers);

    var subscription = obervable.subscribe(subscribeHandlers);

    setTimeout(() => {
      subscription.unsubscribe()
    }, 5000);
  }

  ngOnInit() {
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

    return observable.subscribe((e: any) => {
      if (e.keyCode === 27) {
        nameInput.value = '';
      }
    });
  }
}