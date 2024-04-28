const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        brand: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese la marca del vehiculo.",
            },
          },
        },
        model: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese el modelo del vehiculo.",
            },
          },
        },
        year: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese el año del vehiculo.",
            },
          },
        },
        color: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese el color del vehiculo.",
            },
          },
        },
        kilometres: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese los kilometros del vehiculo.",
            },
          },
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese una foto del vehiculo.",
            },
          },
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese el precio del vehiculo.",
            },
          },
        },
      },
      {
        sequelize,
        modelName: "product",
        timestamps: true,
      }
    );
    return Product;
  }
}

module.exports = Product;
