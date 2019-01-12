import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { InputViewComponent } from './base/input-view/input-view.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { IdService } from 'src/services/idService';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AddUserComponent } from './add-user/add-user.component';
import { TicTacToeCellComponent } from './tic-tac-toe-cell/tic-tac-toe-cell.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersService } from 'src/services/usersService';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ObservableExerciseComponent } from './observable-exercise/observable-exercise.component';
import { HttpModule } from '@angular/http';
import { AddCarComponent } from './add-car/add-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { EditCarComponent } from './edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    BaseViewComponent,
    NotFoundViewComponent,
    InputViewComponent,
    ParentComponent,
    ChildComponent,
    ServiceExampleComponent,
    AddUserComponent,
    TicTacToeCellComponent,
    TicTacToeComponent,
    UsersListComponent,
    UserComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    ObservableExerciseComponent,
    AddCarComponent,
    CarListComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularDateTimePickerModule,
    HttpModule
  ],
  providers: [IdService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }



