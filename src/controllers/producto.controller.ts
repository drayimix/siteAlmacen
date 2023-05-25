import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Producto, ProductoI } from '../models/producto';

export class ProductoController{
    //metodo mo
    public async getAllProducto(req: Request, res:Response){
        try {
            // const cliente: ClienteI[] = await Cliente.findAll(
            //     {
            //         where: {activo: true}
            //     }
            // ) 
            const producto: ProductoI[] = await Producto.findAll() // select * from clientes;
            res.status(200).json({producto})
        } catch (error) {

        }
    }
}