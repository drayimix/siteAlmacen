import { Request, Response, Application, Router } from "express";

import { ProductoController } from "../controllers/producto.controller";

export class ProductoRoutes {
    public productoController: ProductoController = new ProductoController();
    
    public routes(app: Application): void {
        // app.route("/clientes/test").get(this.clienteController.test)
        app.route("/productos").get(this.productoController.getAllProducto)
    }
}