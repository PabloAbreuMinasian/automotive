const { fakerEN_US: faker } = require("@faker-js/faker");
const { Order } = require("../models");

module.exports = async () => {
  const orders = [];

  for (let i = 0; i < 15; i++) {
    const firstname = faker.person.firstName();
    orders.push({
      firstname: firstname,
      lastname: faker.person.lastName(),
      email: firstname + "@gmail.com",
      phone: faker.phone.number(),
      brand: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2022,
      color: faker.vehicle.color(),
      kilometres: faker.number.int(150000),
      status: "Pendiente",
    });
  }

  await Order.bulkCreate(orders);
  console.log("[Database] Order seeder executed successfully.");
};
