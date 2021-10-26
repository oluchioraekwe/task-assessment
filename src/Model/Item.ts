import { Model, DataTypes } from "sequelize";
import database from "../database/database";

interface ItemAttributes {
  id: string;
  name: string;
  last: string;
  buy: string;
  sell: string;
  volume: string;
  base_unit: string;
}
export class ItemInstance extends Model<ItemAttributes> {}

ItemInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sell: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    volume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "items",
  }
);
