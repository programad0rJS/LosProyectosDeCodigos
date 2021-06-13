import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamburquesasComponent } from './hamburquesas/hamburquesas.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
const routes: Routes = [
  { path: '', component: HamburquesasComponent  },
  { path: 'contactos',   loadChildren: () => import('./components/dinam-ico2/dinam-ico2.module').then(m => m. DinamICO2Module) },
  { path: 'configuracion', component: ConfiguracionComponent } ,
  { path: '**', redirectTo: '/' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
