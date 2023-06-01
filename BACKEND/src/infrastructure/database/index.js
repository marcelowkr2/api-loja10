const Sequelize = require("sequelize");

const DB_NAME = "loja";
const DB_USER = "Marcelop";
const DB_PASS = "dU2q4Lpm12";
const DB_CONFIG = {
    dialect: "mysql",
    host: "xp48.mysql.database.azure.com",
    port: 3306,
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar uma conexão com banco dados");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;
