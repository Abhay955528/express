const Sequelize = require('sequelize');
const sequelize = new Sequelize('New-node-complete','root','12345',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;