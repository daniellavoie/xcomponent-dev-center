import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { GuidesComponent } from './guides/guides.component';
import { QuickstartComponent } from './quickstart/quickstart.component';

@NgModule({
  declarations: [
    AppComponent,
    GuidesComponent,
    MenuComponent,
    QuickstartComponent
  ],
  imports: [
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
