const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/admins", adminRoutes);
  // app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
};
