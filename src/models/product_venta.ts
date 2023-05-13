import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class ProductVenta extends Model{
    public cantidadPV!: string;
    public precioPV!: number;
    public totalPV!: number;
}

export interface ProductVentaI{
    cantidadPV: string;
    precioPV: number;
    totalPV: number;
}

ProductVenta.init(
    {
        cantidadPV:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precioPV: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        totalPV: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: "productVentas",
        sequelize: database,
        timestamps: true
    }
)