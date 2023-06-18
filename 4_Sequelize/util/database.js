const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo','root','12345',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;