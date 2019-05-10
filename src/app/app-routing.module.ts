import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasswordChangeComponent} from "./password-change/password-change.component";
import {GridComponent} from "./grid/grid.component";


const routes: Routes = [
  { path: 'password-change', component: PasswordChangeComponent },
  { path: '', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
