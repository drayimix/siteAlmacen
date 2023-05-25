import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Cliente, ClienteI } from '../models/cliente';

export class ClienteController {

    //metodo mostrar clientes
    public async getAllCliente(req: Request, res:Response){
        try {
            // const cliente: ClienteI[] = await Cliente.findAll(
            //     {
            //         where: {activo: true}
            //     }
            // ) 
            const cliente: ClienteI[] = await Cliente.findAll() // select * from clientes;
            res.status(200).json({cliente})
        } catch (error) {

        }
    }
    
    //metodo mostrar un cliente
    public async getOneCliente(req: Request, res: Response){
        const { id: idParam } = req.params
        try{
            const cliente:ClienteI | null = await Cliente.findOne({
                where: {
                    id: idParam,
                }
            })
            if(cliente){
                res.status(200).json({cliente})
            } else return res.status(300).json({msg: "El cliente no existe"})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    //metodo de crear cliente
    public async createCliente(req: Request, res: Response){
        const {
            nombreCliente,
            direccionCliente,
            telefonoCliente,
            correoCliente,
            passwordCliente
        }=req.body;

        try{
            let body: ClienteI = {
                nombreCliente,
                direccionCliente,
                telefonoCliente,
                correoCliente,
                passwordCliente
            }
            const cliente:ClienteI = await Cliente.create({...body});
            res.status(200).json({cliente});
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    //actualizar cliente
    public async updateCliente(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            id,
            nombreCliente,
            direccionCliente,
            telefonoCliente,
            correoCliente,
            passwordCliente
        }=req.body

        try{
            let body: ClienteI = {
                nombreCliente,
                direccionCliente,
                telefonoCliente,
                correoCliente,
                passwordCliente
            }

            const clienteExist: ClienteI | null = await Cliente.findByPk(pk);

            if(!clienteExist) return res.status(500).json({msg:"El cliente no existe"})
            await Cliente.update(body, {
                where: {id:pk}
            });
        }catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
        const cliente: ClienteI | null = await Cliente.findByPk(pk);
        if(cliente) return res.status(200).json({cliente})
    }

    //Eliminar cliente
    public async deleteCliente(req: Request, res: Response){
        const { id:pk } = req.params;
        try {
            const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
            if(!clienteExist) return res.status(500).json({msg:"El cliente no existe"})
            await Cliente.destroy({
                where:{id:pk}
            })
            res.status(200).json({msg:"Cliente eliminado"})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
}
