import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Producto extends Model{
    public nombreProducto!: string;
    public marcaProducto!: string;
    public precioProducto!: number;
    public stockProducto!: number;
    public cantidadProducto!: number;
}

export interface ProductoI{
    nombreProducto: string;
    marcaProducto: string;
    precioProducto: number;
    stockProducto: number;
    cantidadProducto: number;
}

Producto.init(
    {
        nombreProducto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marcaProducto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precioProducto: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stockProducto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidadProducto: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
);