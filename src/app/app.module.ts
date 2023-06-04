import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NassaComponent } from './nassa/nassa.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { environment } from 'src/environments/environments';

@NgModule({
  declarations: [
    AppComponent,
    NassaComponent,
    SimpsonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
