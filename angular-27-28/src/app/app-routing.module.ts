import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: "formulario",
    component: FormularioComponent
  },
  {
    path: "prueba",
    component: PruebaComponent
  },
  {
    path: "",
    component: FormularioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
