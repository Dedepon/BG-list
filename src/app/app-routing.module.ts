import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BgDashboardComponent } from './components/bg-dashboard/bg-dashboard.component';
import { BgListComponent } from './components/bg-list/bg-list.component';
import { BgDetailComponent } from './components/bg-detail/bg-detail.component';
import { BgCollectionComponent } from './components/bg-collection/bg-collection.component';
import { BgTreeComponent } from './components/bg-tree/bg-tree.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BgDashboardComponent },
  { path: 'list', component: BgListComponent },
  { path: 'collection', component: BgCollectionComponent },
  { path: 'tree', component: BgTreeComponent },
  { path: 'details/:bgid', component: BgDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
