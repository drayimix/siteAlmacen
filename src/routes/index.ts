import { ClienteRoutes } from './cliente';
import { ProductoRoutes } from './producto';
import { ProductVentaRoutes } from './productventa';
import { TipoProductoRoutes } from './tipoproducto';
import { VentaRoutes } from './venta';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public tipoproductoRoutes: TipoProductoRoutes = new TipoProductoRoutes();
    public productventaRoutes: ProductVentaRoutes = new ProductVentaRoutes();
}