import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseViewComponent } from './base-view/base-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'base-view', component: BaseViewComponent},
  { path: 'services-example', component: ServiceExampleComponent},
  { path: 'detail-view', component: DetailViewComponent},
  { path: 'not-found', component: NotFoundViewComponent},
  { path: 'parent-child', component: ParentComponent},
  { path: 'users-list', component: UsersListComponent},
  { path: '',
    redirectTo: '/base-view',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
