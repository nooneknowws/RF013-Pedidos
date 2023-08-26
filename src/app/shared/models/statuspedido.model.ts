export class StatusPedido {
    constructor(
        public idStatus: number,
        public Status: string,
        public color: string
    ){}
    static ABERTO = new StatusPedido(1, "Aberto", "yellow");
    static REJEITADO = new StatusPedido(2, "Rejeitado", "#c94c4c");
    static CANCELADO = new StatusPedido(3, "Cancelado", "#c94c4c");
    static RECOLHIDO = new StatusPedido(4, "Recolhido", "grey");
    static AGUARDANDO = new StatusPedido(5, "Aguardando Pagamento", "#034f84");
    static PAGO = new StatusPedido(6, "Pago", "orange");
    static FINALIZADO = new StatusPedido(7, "Finalizado", "green");
}
