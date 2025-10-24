const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');
const Buses = require('../models/busesDb');
const {Op} = require('sequelize');



const busPost = async (req,res)=>{

    try {
        const {busNumber,totalSeats,availableSeats} = req.body

        const insertQuery = await Buses.create({
            busNumber:busNumber,
            totalSeats:totalSeats,
            availableSeats:availableSeats
        })
        res.status(201).send(insertQuery)
    } catch (error) {
        postError(res,error.message,500)
    }
    
    // const insertQuery = 'INSERT INTO Buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)'

    // db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err,result)=>{
    //     if(err){
    //         return postError(res,err.message,500)
    //     }
    //     res.status(201).send(result)
    // })
}

const busGet = async (req,res)=>{

    try {
        const seats = req.params.seats

        const getQuery = await Buses.findAll({
            where:{
                availableSeats:{
                    [Op.gte]:seats
                }
            }
        })
        res.status(200).send(getQuery)
    } catch (error) {
        postError(res,error.message,500)
    }
    

    // const getQuery = 'SELECT * FROM Buses WHERE availableSeats >= ?'

    // db.execute(getQuery,[seats],(err,result)=>{
    //     if(err){
    //         return postError(res,err.message,500)
    //     }
    //     res.status(200).send(result)
    // })
}


module.exports = {
    busPost,
    busGet

};