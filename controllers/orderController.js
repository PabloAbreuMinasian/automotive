const { Order } = require("../models");

//GET ALL ORDERS
async function index(req, res) {
  try {
    const orders = await Order.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.json(orders);
  } catch (error) {
    console.log(error);
  }
}

//GET ONE ORDER
async function show(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    return order
      ? res.json(order)
      : res.json({ msg: "Error 404. Orden no encontrada", notFound: true });
  } catch (error) {
    console.log(error);
  }
}

//CREATE ORDER
async function store(req, res) {
  try {
    await Order.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      kilometres: req.body.kilometres,
    });
    return res.json({ msg: "Orden creada exitosamente" });
  } catch (error) {
    console.log(error);
    return res.json({ msg: err.errors[0].message, constraint: true });
  }
}

//UPDATE ORDER
async function update(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.json({ msg: "Lo sentimos, orden no encontrada." });
    }
    await Order.update(
      {
        status: req.body.status,
      },
      { where: { id: req.body.id } }
    );
    return res.json({ msg: "Orden actualizada exitosamente." });
  } catch (error) {
    console.log(error);
    return res.json({ msg: err.errors[0].message, constraint: true });
  }
}

async function destroy(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.json({ msg: "Lo sentimos, orden no encontrada." });
    }
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ msg: "Orden eliminada exitosamente." });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
