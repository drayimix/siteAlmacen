import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./cliente";

export class Venta extends Model {
    public fechaVenta!: string;
    public subtotalVenta!: number;
    public impuestosVenta!: number;
    public descuentosVenta!: number;
    public totalVenta!: number;
  }

export interface VentaI{
    fechaVenta: string;
    subtotalVenta: number;
    impuestosVenta: number;
    descuentosVenta: number;
    totalVenta: number;
}

Venta.init(
    {
        fechaVenta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subtotalVenta: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        impuestosVenta: {
            type: DataTypes.FLOAT,
            allowNull: false,
            unique: true
        },
        descuentosVenta: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        totalVenta: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        clienteId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Cliente,
            key: 'id',
          }
        }
    },
    {
        tableName: "ventas",
        sequelize: database,
        timestamps: true 
    }
);

Venta.belongsTo(Cliente, {
  foreignKey: 'clienteId',
  as: 'cliente',
});

