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

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    BaseViewComponent,
    NotFoundViewComponent,
    InputViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
