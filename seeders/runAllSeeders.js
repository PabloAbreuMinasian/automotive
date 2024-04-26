require("dotenv").config();

async function runAllSeeders() {
  await require("./adminSeeder")();

  console.log("[Database] Seeders data insertion successful!");
}

runAllSeeders();
