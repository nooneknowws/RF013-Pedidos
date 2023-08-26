import { Component, OnInit, Renderer2 } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { StatusPedido } from 'src/app/shared/models/statuspedido.model';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css'],
})
export class ListarPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(
    private pedidoService: PedidosService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.listarPedidos();
    console.log(this.pedidos);
  }
  listarPedidos(): void {

    const pedidos = [
      { id: 123546123, dia: 15,mes: 5, ano: 2020, status: StatusPedido.PAGO },
      { id: 123573, dia: 30,mes: 8, ano: 2022, status: StatusPedido.RECOLHIDO },
      { id: 121233, dia: 23,mes: 12, ano: 2023, status: StatusPedido.ABERTO },
      { id: 5431233, dia: 3,mes: 10, ano: 2021, status: StatusPedido.CANCELADO },
      { id: 117651233, dia: 12,mes: 2, ano: 2023, status: StatusPedido.REJEITADO},
      { id: 16573, dia: 25,mes: 4, ano: 2023, status: StatusPedido.AGUARDANDO },
      { id: 15671233, dia: 29,mes: 11, ano: 2022, status: StatusPedido.FINALIZADO },
      { id: 1256733, dia: 2,mes: 9, ano: 2023, status: StatusPedido.ABERTO }
      //Testes de pedidos.
    ];
    const tableBody = document.querySelector('tbody'); // seleção da tabela no HTML

  pedidos.forEach(pedido => {
    const row = this.renderer.createElement('tr');
    const idCell = this.renderer.createElement('td');
    const dataCell = this.renderer.createElement('td');
    const statusCell = this.renderer.createElement('td');
    const actionCell = this.renderer.createElement('td');

    const numeroPedido = `#${pedido.id}`;
    this.renderer.appendChild(idCell, this.renderer.createText(numeroPedido));
    const dataFormatada = `${pedido.dia}/${pedido.mes}/${pedido.ano}`
    this.renderer.appendChild(dataCell, this.renderer.createText(String(dataFormatada)));
    
    // Bg color de acordo com o status do pedido.
    this.renderer.setStyle(statusCell, 'background-color', pedido.status.color);
    this.renderer.appendChild(statusCell, this.renderer.createText(pedido.status.Status));
    // Estilização das células, centralização e negrito
    this.renderer.addClass(idCell, 'text-center');
    this.renderer.addClass(dataCell, 'text-center');
    this.renderer.addClass(statusCell, 'text-center');
    this.renderer.addClass(statusCell, 'bold-text');

    // Botões de acordo com os status
    if (pedido.status === StatusPedido.ABERTO) {
      const buttonRecolhimento = this.renderer.createElement('a');
      const cellStyles = 'width: 100px'; // Tamanho do botão
      this.renderer.addClass(buttonRecolhimento, 'btn');
      this.renderer.addClass(buttonRecolhimento, 'btn-xs');
      this.renderer.addClass(buttonRecolhimento, 'btn-warning');
      this.renderer.appendChild(buttonRecolhimento, this.renderer.createText('Recolher'));
      this.renderer.setAttribute(actionCell, 'style', cellStyles);
      this.renderer.appendChild(actionCell, buttonRecolhimento);
    }

    if (pedido.status === StatusPedido.RECOLHIDO) {
      const buttonLavagem = this.renderer.createElement('a');
      this.renderer.addClass(buttonLavagem, 'btn');
      this.renderer.addClass(buttonLavagem, 'btn-xs');
      this.renderer.addClass(buttonLavagem, 'btn-secondary');
      this.renderer.appendChild(buttonLavagem, this.renderer.createText('Lavagem'));
      this.renderer.appendChild(actionCell, buttonLavagem);
    }

    if (pedido.status === StatusPedido.PAGO) {
      const buttonFinalizar = this.renderer.createElement('a');
      this.renderer.addClass(buttonFinalizar, 'btn');
      this.renderer.addClass(buttonFinalizar, 'btn-xs');
      this.renderer.addClass(buttonFinalizar, 'btn-success');
      this.renderer.appendChild(buttonFinalizar, this.renderer.createText('Finalizar'));
      this.renderer.appendChild(actionCell, buttonFinalizar);
    }

    this.renderer.appendChild(row, idCell);
    this.renderer.appendChild(row, dataCell);
    this.renderer.appendChild(row, statusCell);
    this.renderer.appendChild(row, actionCell);
    this.renderer.appendChild(tableBody, row);
  });
  }
}
