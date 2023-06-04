import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NassaComponent } from './nassa/nassa.component';
import { SimpsonComponent } from './simpson/simpson.component';

const routes: Routes = [
  
  { path: 'nassa', component: NassaComponent },
  { path: 'simpson', component: SimpsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
