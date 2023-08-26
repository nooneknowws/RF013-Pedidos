import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PedidosService } from './services/pedidos.service';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';



@NgModule({
  declarations: [
    ListarPedidosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PedidosService
  ]
})
export class PedidosModule { }
