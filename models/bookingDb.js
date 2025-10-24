const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/DB-Connection');

const booking = sequelize.define('booking',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    seatNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = booking;