const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');

const busPost = (req,res)=>{
    const {busNumber,totalSeats,availableSeats} = req.body
    const insertQuery = 'INSERT INTO Buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)'

    db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err,result)=>{
        if(err){
            return postError(res,err.message,500)
        }
        res.status(201).send(result)
    })
}

const busGet = (req,res)=>{
    const seats = req.params.seats

    const getQuery = 'SELECT * FROM Buses WHERE availableSeats >= ?'

    db.execute(getQuery,[seats],(err,result)=>{
        if(err){
            return postError(res,err.message,500)
        }
        res.status(200).send(result)
    })
}


module.exports = {
    busPost,
    busGet

};