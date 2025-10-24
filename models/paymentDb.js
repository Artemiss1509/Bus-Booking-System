const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/DB-Connection');

const payment = sequelize.define('payment',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    amountPaid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    paymentStatus:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = payment;