const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Expense = sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type:Sequelize.INTEGER,
        unique:true
    },
    descripiton:Sequelize.STRING,
    category:{
        type:Sequelize.STRING,
        unique:true
    }
}) 

module.exports = Expense;