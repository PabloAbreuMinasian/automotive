require("dotenv").config();

async function runAllSeeders() {
  await require("./adminSeeder")();
  await require("./orderSeeder")();
  await require("./productSeeder")();

  console.log("[Database] Seeders data insertion successful!");
}

runAllSeeders();
