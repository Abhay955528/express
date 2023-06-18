const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Expense = sequelize.define("expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  descripiton: Sequelize.STRING,
  category: Sequelize.STRING
});

module.exports = Expense;
