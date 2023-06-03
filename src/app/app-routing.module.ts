import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NassaComponent } from './nassa/nassa.component';

const routes: Routes = [
  
  { path: 'nassa', component: NassaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
