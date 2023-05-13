import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class TipoProducto extends Model{
    public nameTipoproducto!: string;
}

export interface TipoProductoI{
    nameTipoproducto: string;
}

TipoProducto.init(
    {
        nameTipoproducto:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "tipoproductos",
        sequelize: database,
        timestamps: true
    }
)