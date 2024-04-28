const { Product } = require("../models");

module.exports = async () => {
  const products = [];

  products.push(
    {
      brand: "Peugot",
      model: "2008",
      year: 2017,
      color: "Gris",
      kilometres: 70120,
      image: "the-fall-of-troy-1.webp",
      price: "19000",
    },
    {
      brand: "Renault",
      model: "Capture",
      year: 2018,
      color: "Beige",
      kilometres: 40370,
      image: "the-fall-of-troy-2.webp",
      price: "14500",
    }
  );
  await Product.bulkCreate(products);
  console.log("[Database] Product seeder executed successfully.");
};
