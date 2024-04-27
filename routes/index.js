const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  app.use("/", authRoutes);

  app.use("/", publicRoutes);
  app.use("/admins", adminRoutes);
  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
};
