import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { InputViewComponent } from './base/input-view/input-view.component';
import { InputService } from 'src/services/inputService';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { IdService } from 'src/services/idService';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';

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
    UserComponent,
    UsersListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InputService, IdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
