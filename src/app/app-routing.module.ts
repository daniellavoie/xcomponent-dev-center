import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuidesComponent } from './guides/guides.component';
import { QuickstartComponent } from './quickstart/quickstart.component';

const routes: Routes = [
      { path: 'guides', component: GuidesComponent },
      { path: '', component: QuickstartComponent }
    ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}