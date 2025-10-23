const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');




const userPost = (req,res)=>{

    const {name,email} = req.body
    const insertQuery = 'INSERT INTO Users (name,email) VALUES (?,?)'

    db.execute(insertQuery,[name,email],(err,result)=>{
        if(err){
            // console.log(err.message)
            // res.status(500).send(err.message)
            return postError(res,err.message,500)
        }
        console.log(result)
        res.status(201).send(result)
    })

}

const userPut = (req,res)=>{
    const id = req.params.id;
    const {name,email} = req.body

    const updateQuery = 'UPDATE Users SET name = ?, email = ? WHERE id = ?';

    db.execute(updateQuery,[name,email,id],(err,result)=>{
        if(err){
            return postError(res,err.message,500);
        }
        res.status(200).send(result)
    })
};

const userDelete = (req,res)=>{
    const id = req.params.id;

    const deleteQuery = 'DELETE FROM Users WHERE id = ?';

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            return postError(res,err.message,500);
        }
        res.status(200).send(result)
    })

}


module.exports = {
    userPost,
    userPut,
    userDelete
};