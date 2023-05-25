import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/venta';

export class VentaController{
    //metdo mostrar ventas
    public async getAllVenta(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll() // select * from clientes;
            res.status(200).json({venta})
        } catch (error) {

        }
    }

    //metodo mostrar una venta
    public async getOneVenta(req: Request, res: Response){
        const { id: idParam } = req.params
        try{
            const venta:VentaI | null = await Venta.findOne({
                where: {
                    id: idParam,
                }
            })
            if(venta){
                res.status(200).json({venta})
            } else return res.status(300).json({msg: "la Venta no existe"})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    //metodo crear venta
    public async createVenta(req: Request, res: Response){
        const {
            fechaVenta,
            subtotalVenta,
            impuestosVenta,
            descuentosVenta,
            totalVenta
        }=req.body;

        try{
            let body: VentaI = {
                fechaVenta,
                subtotalVenta,
                impuestosVenta,
                descuentosVenta,
                totalVenta
            }
            const venta:VentaI = await Venta.create({...body});
            res.status(200).json({venta});
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    //metodo actualizar venta
    public async updateVenta(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            id,
            fechaVenta,
            subtotalVenta,
            impuestosVenta,
            descuentosVenta,
            totalVenta
        }=req.body

        try{
            let body: VentaI = {
                fechaVenta,
                subtotalVenta,
                impuestosVenta,
                descuentosVenta,
                totalVenta
            }

            const ventaExist: VentaI | null = await Venta.findByPk(pk);

            if(!ventaExist) return res.status(500).json({msg:"La venta no existe"})
            await Venta.update(body, {
                where: {id:pk}
            });
        }catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
        const venta: VentaI | null = await Venta.findByPk(pk);
        if(venta) return res.status(200).json({venta})
    }

    //metodo eliminar venta
    public async deleteVenta(req: Request, res: Response){
        const { id:pk } = req.params;
        try {
            const ventaExist: VentaI | null = await Venta.findByPk(pk);
            if(!ventaExist) return res.status(500).json({msg:"La venta no existe"})
            await Venta.destroy({
                where:{id:pk}
            })
            res.status(200).json({msg:"venta eliminada"})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
}