import { StatusPedido } from "./statuspedido.model";

export class Pedido {
    constructor(
        public id?: number,
        public dia?: number,
        public mes?: number,
        public ano?: number,
        public date?: Date,
        public status?: StatusPedido
    ){

    }
}
