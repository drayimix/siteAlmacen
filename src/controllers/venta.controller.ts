import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/venta';

export class VentaController{
    public async getAllVenta(req: Request, res:Response){
        try {
            // const cliente: ClienteI[] = await Cliente.findAll(
            //     {
            //         where: {activo: true}
            //     }
            // ) 
            const venta: VentaI[] = await Venta.findAll() // select * from clientes;
            res.status(200).json({venta})
        } catch (error) {

        }
    }
}