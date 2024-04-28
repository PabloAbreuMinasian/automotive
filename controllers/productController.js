const Product = require("../models/Product");
const { formidable } = require("formidable");

const form = formidable({
  multiples: true,
  keepExtensions: true,
});

// GET ALL PRODUCTS
async function index(req, res) {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
}

// GET ONE PRODUCT
async function show(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    return product
      ? res.json(product)
      : res.json({ msg: "Error 404. Producto no encontrado.", notFound: true });
  } catch (err) {
    console.log(err);
  }
}

// CREATE PRODUCT
async function store(req, res) {
  form.parse(req, async (err, fields, files) => {
    if (files.image.size === 0) {
      files.image.newFilename = "";
    }

    try {
      await Product.create({
        brand: fields.brand,
        model: fields.model,
        year: fields.year,
        color: fields.color,
        kilometres: fields.kilometres,
        image: files.image.newFilename,
        price: fields.price,
      });

      return res.json({ msg: "Producto creado exitosamente." });
    } catch (err) {
      console.log(err);
      return res.json({ msg: err.errors[0].message, constraint: true });
    }
  });
}

// UPDATE PRODUCT
async function update(req, res) {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.json({ msg: "Lo sentimos. Producto no encontrado." });
  }

  form.parse(req, async (err, fields, files) => {
    if (files.image.size === 0) {
      files.image.newFilename = product.image;
    }

    try {
      await Product.update(
        {
          brand: fields.brand,
          model: fields.model,
          year: fields.year,
          color: fields.color,
          kilometres: fields.kilometres,
          image: files.image.newFilename,
          price: fields.price,
        },
        { where: { id: req.params.id } }
      );

      return res.json({ msg: "Producto actualizado exitosamente" });
    } catch (err) {
      console.log(err);
      return res.json({ msg: err.errors[0].message, constraint: true });
    }
  });
}

// DELETE PRODUCT
async function destroy(req, res) {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ msg: "Producto eliminado exitosamente." });
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
