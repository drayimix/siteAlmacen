import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { TipoProducto } from "./tipoproducto";

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
        tipoProductoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: TipoProducto,
              key: 'id',
            },
        },
    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
);

// Asociación entre Producto y TipoProducto
Producto.belongsTo(TipoProducto, { foreignKey: "tipoProductoId", as: 'tipoProducto'}); // Agrega una columna tipoProductoId en la tabla productos
// agregamos la relacion inversa de uno a muchos
TipoProducto.hasMany(Producto, { foreignKey: "tipoProductoId" }); // Agrega una columna tipoProductoId en la tabla productos