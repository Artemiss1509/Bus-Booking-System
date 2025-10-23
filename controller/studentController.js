const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');


const studentPost = (req,res)=>{
    const {name,email,age} = req.body

    const insertQuery = 'INSERT INTO Students (name,email,age) VALUES (?,?,?)'
    db.execute(insertQuery,[name,email,age],(err,result)=>{
        if(err){
            return postError(res,err.message,500)
        }
        res.status(201).send(result)
    })
}

const studentGet = (req,res)=>{
    db.execute('SELECT * FROM Students',(err,result)=>{
        if(err){
            return postError(res,err.message,500)
        }
        res.status(200).send(result)
    })
}
const studentPut = (req,res)=>{
    const id = req.params.id;
    const {name,email,age} = req.body

    const updateQuery = 'UPDATE Students SET name = ?, email = ?, age = ? WHERE id = ?';

    db.execute(updateQuery,[name,email,age,id],(err,result)=>{
        if(err){
            return postError(res,err.message,500);
        }
        res.status(200).send(result)
    })
};

const studentGetId = (req,res)=>{
    const id = req.params.id;
    const getQuery = 'SELECT * FROM Students WHERE id = ?'

    db.execute(getQuery,[id],(err,result)=>{
        if(err){
            return postError(res,err.message,500)
        }
        res.status(200).send(result)
    })
}

const studentDelete = (req,res)=>{
    const id = req.params.id;

    const deleteQuery = 'DELETE FROM Students WHERE id = ?';

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            return postError(res,err.message,500);
        }
        res.status(200).send(result)
    })

}


module.exports = {
    studentPost,
    studentGet,
    studentPut,
    studentGetId,
    studentDelete
};