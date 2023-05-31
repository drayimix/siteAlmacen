import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

import { Venta } from "./venta";
import { Producto } from "./producto";

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
);

ProductVenta.belongsTo(Venta, { foreignKey: "ventaId" }); // Agrega una columna ventaId en la tabla productoVentas
ProductVenta.belongsTo(Producto, { foreignKey: "productoId" }); // Agrega una columna productoId en la tabla productoVentas

// agregamos la relacion inversa de uno a muchos
Venta.hasMany(ProductVenta, { foreignKey: "ventaId" }); // Agrega una columna ventaId en la tabla productoVentas
// agregamos la relacion inversa de uno a muchos
Producto.hasMany(ProductVenta, { foreignKey: "productoId" }); // Agrega una columna productoId en la tabla productoVentas