const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');
const Buses = require('../models/busesDb');
const {Op} = require('sequelize');
const User = require('../models/userDb');
const Booking = require('../models/bookingDb');



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

}

const busGet2 = async (req,res)=>{
    try {
        const busid = req.params.id;
        const getQuery = await Booking.findByPk(busid,{include:User})
        if(!getQuery){
            return postError(res,'Bus not found',404)
        }
        res.status(200).send(getQuery)
    } catch (error) {
        postError(res,error.message,500)
    }
    
}


module.exports = {
    busPost,
    busGet,
    busGet2
};