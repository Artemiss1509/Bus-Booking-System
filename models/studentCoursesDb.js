const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/DB-Connection');

const studentCourses = sequelize.define('sttudentCourses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
})

module.exports = studentCourses;