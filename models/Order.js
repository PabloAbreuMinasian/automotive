const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingresar su nombre.",
            },
          },
        },
        lastname: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingresar su apellido.",
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingresar su mail.",
            },
            isEmail: {
              msg: "Mail no valido",
            },
          },
        },
        phone: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingresar su numero de telefono.",
            },
          },
        },
        brand: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese la marca del vehiculo que busca.",
            },
          },
        },
        model: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese el modelo del vehiculo que busca.",
            },
          },
        },
        year: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese el año del vehiculo que busca.",
            },
          },
        },
        color: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese el color del vehiculo que busca.",
            },
          },
        },
        kilometres: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese los kilometros del vehiculo que busca.",
            },
          },
        },
        status: {
          type: DataTypes.ENUM("Pendiente", "Seguimiento", "Completada"),
          defaultValue: "Pendiente",
        },
      },
      {
        sequelize,
        modelName: "order",
        timestamps: true,
      }
    );
    return Order;
  }
}

module.exports = Order;
