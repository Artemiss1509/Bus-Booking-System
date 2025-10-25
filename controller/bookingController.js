const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');
const Booking = require('../models/bookingDb');


const bookingPost = async (req,res)=>{
    try {
        const {userId,busId,seatNumber} = req.body
        const postQuery = await Booking.create({
            userId:userId,
            busId:busId,
            seatNumber:seatNumber
        })
        res.status(201).send(postQuery)
    } catch (error) {
        postError(res,error.message,500)
    }
}


module.exports = {
    bookingPost
};