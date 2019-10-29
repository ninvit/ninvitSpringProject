import { DiaDetailsComponent } from './dia-details/dia-details.component';
import { CreateDiaComponent } from './create-dia/create-dia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaListComponent } from './dia-list/dia-list.component';
import { UpdateDiaComponent } from './update-dia/update-dia.component';

const routes: Routes = [
  { path: '', redirectTo: 'dia', pathMatch: 'full' },
  { path: 'dias', component: DiaListComponent },
  { path: 'add', component: CreateDiaComponent },
  { path: 'update/:id', component: UpdateDiaComponent },
  { path: 'details/:id', component: DiaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
