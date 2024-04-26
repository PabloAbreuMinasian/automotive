const bcrypt = require("bcryptjs");
const { Admin } = require("../models");

module.exports = async () => {
  const admins = [];

  admins.push({
    email: "prueba@gmail.com",
    password: await bcrypt.hash("prueba", 10),
  });

  await Admin.bulkCreate(admins);
  console.log("[Database] Admin seeder executed successfully.");
};
