const Customers = require ("./customer");
const Orders = require("./order");
const Products = require("../../product/models/product")

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Order_Details = db.define(
  "Order_Details",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_order: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: Orders,
        key: "id",
      }
    },
    id_product: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: Products,
        key: "id",
      }
    },
    amount: {
      type: DataTypes.INTEGER
    },
    unit_value: {
      type: DataTypes.DECIMAL
    },
    percentage_discount: {
      type: DataTypes.DECIMAL
    },
    total_value: {
      type: DataTypes.DECIMAL
    },
    id_product_size: {
      type: DataTypes.INTEGER
    },
    id_product_color: {
      type: DataTypes.INTEGER
    },
    id_product_material: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "order_details",
  }
);


module.exports = Order_Details