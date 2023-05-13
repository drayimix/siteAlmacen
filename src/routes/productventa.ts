import { Request, Response, Application, Router } from "express";

import { ProductVentaController } from "../controllers/productventa.controller";

export class ProductVentaRoutes {
    public productventaController: ProductVentaController = new ProductVentaController();
    
    public routes(app: Application): void {
        // app.route("/clientes/test").get(this.clienteController.test)
        app.route("/productventas").get(this.productventaController.getAllProductVenta)
    }
}