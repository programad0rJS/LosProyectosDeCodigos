import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from 'src/app/contactos/contactos.component';


const routes: Routes = [
  { path: '', component: ContactosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinamICO2RoutingModule { }
