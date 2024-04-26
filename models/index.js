const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

const Admin = require("./Admin");
const Order = require("./Order");
const Product = require("./Product");

Admin.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);

module.exports = {
  sequelize,
  Admin,
  Product,
  Order,
};
