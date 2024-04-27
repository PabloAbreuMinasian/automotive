const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

async function validateAdmin(req, res) {
  try {
    const admin = await Admin.findOne({ where: { email: req.body.email } });

    if (!admin) {
      console.log("Este admin no existe.");
      return res.json({
        msg: "Datos incorrectos. Por favor inténtelo de nuevo.",
        constraint: true,
      });
    }

    const match = await bcrypt.compare(req.body.password, admin.password);

    if (!match) {
      console.log("Contraseña incorrecta.");
      return res.json({
        msg: "Datos incorrectos. Por favor inténtelo de nuevo.",
        constraint: true,
      });
    }

    const token = jwt.sign({ sub: admin.id }, process.env.JWT_SECRET);

    return res.json({
      token: token,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  validateAdmin,
};
