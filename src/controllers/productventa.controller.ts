import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { ProductVenta, ProductVentaI } from '../models/product_venta';

export class ProductVentaController{
    public async getAllProductVenta(req: Request, res:Response){
        try {
            // const cliente: ClienteI[] = await Cliente.findAll(
            //     {
            //         where: {activo: true}
            //     }
            // ) 
            const productoventa: ProductVentaI[] = await ProductVenta.findAll() // select * from clientes;
            res.status(200).json({productoventa})
        } catch (error) {

        }
    }
}