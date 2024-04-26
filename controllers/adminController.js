const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

// GET ALL ADMINS
async function index(req, res) {
  try {
    const admins = await Admin.findAll();
    return res.json(admins);
  } catch (error) {
    console.log(error);
  }
}

// GET ONE ADMIN
async function show(req, res) {
  try {
    const admin = await Admin.findByPk(req.params.id);
    return admin
      ? res.json(admin)
      : res.json({ msg: "Error, admin no encontrado." });
  } catch (error) {
    console.log(error);
  }
}

// CREATE ADMIN
async function store(req, res) {
  try {
    let password = "";

    if (req.body.password !== "") {
      password = await bcrypt.hash(req.body.password, 10);
    }

    await Admin.create({
      email: req.body.email,
      password: password,
    });
    return res.json({ msg: "Admin creado exitosamente." });
  } catch (error) {
    console.log(error);
    return res.json({ msg: err.errors[0].message, constraint: true }); //VEEEER
  }
}

// UPDATE ADMIN
async function update(req, res) {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) {
      return res.json({ msg: "Lo sentimos, no encontramos el admin" });
    }
    await Admin.update(
      {
        email: req.body.email,
      },
      { where: { id: req.params.id } }
    );
    return res.json({ msg: "Admin actualizado correctamente" });
  } catch (error) {
    console.log(error);
    return res.json({ msg: err.errors[0].message, constraint: true });
  }
}

// DELETE ADMIN
async function destroy(req, res) {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) {
      return res.json({ msg: "Error 404. Admin no encontrado." });
    }
    await Admin.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ msg: "Admin eliminado correctamente." });
  } catch (err) {
    console.log(err);
    return res.json({ msg: err.errors[0] });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
