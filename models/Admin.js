const { Model, DataTypes } = require("sequelize");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese su mail.",
            },
            isEmail: {
              msg: "Mail no valido.",
            },
          },
          unique: {
            args: true,
            msg: "Mail ya registrado. Por favor, intente con otro.",
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Por favor, ingrese una contraseña.",
            },
          },
        },
      },
      {
        sequelize,
        modelName: "admin",
        timestamps: true,
      }
    );
    return Admin;
  }
}

module.exports = Admin;
