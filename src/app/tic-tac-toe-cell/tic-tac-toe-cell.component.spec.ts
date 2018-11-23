import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeCellComponent } from './tic-tac-toe-cell.component';

describe('TicTacToeCellComponent', () => {
  let component: TicTacToeCellComponent;
  let fixture: ComponentFixture<TicTacToeCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacToeCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
