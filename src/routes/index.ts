import { ClienteRoutes } from './cliente';
import { VentaRoutes } from './venta';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
}