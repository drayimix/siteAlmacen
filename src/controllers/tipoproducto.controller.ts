import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { TipoProducto, TipoProductoI } from '../models/tipoproducto';

export class TipoProductoController{
    public async getAllTipoProducto(req: Request, res:Response){
        try {
            // const cliente: ClienteI[] = await Cliente.findAll(
            //     {
            //         where: {activo: true}
            //     }
            // ) 
            const tipoproducto: TipoProductoI[] = await TipoProducto.findAll() // select * from clientes;
            res.status(200).json({tipoproducto})
        } catch (error) {

        }
    }
}