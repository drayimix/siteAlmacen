import { Request, Response, Application, Router } from "express";

import { TipoProductoController } from "../controllers/tipoproducto.controller";

export class TipoProductoRoutes {
    public tipoproductoController: TipoProductoController = new TipoProductoController();
    
    public routes(app: Application): void {
        // app.route("/clientes/test").get(this.clienteController.test)
        app.route("/tipoproductos").get(this.tipoproductoController.getAllTipoProducto)
    }
}