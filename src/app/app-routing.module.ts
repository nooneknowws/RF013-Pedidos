import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPedidosComponent } from './pedidos/listar-pedidos/listar-pedidos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pedidos/listar',
    pathMatch: 'full'
  },
  {
    path: 'pedidos',
    redirectTo: 'pedidos/listar'
  },
  {
    path: 'pedidos/listar',
    component: ListarPedidosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
