const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/DB-Connection');

const IdentityCard = sequelize.define('IdentityCard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cardNumber:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }
})

module.exports = IdentityCard;