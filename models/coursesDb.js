const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/DB-Connection');

const Courses = sequelize.define('courses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    courseName:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Courses;