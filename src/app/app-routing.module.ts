import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuickstartComponent } from './quickstart/quickstart.component';

const routes: Routes = [
      { path: '', component: QuickstartComponent }
    ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}