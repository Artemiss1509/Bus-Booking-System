const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');
const Student = require('../models/studentDb');



const studentPost = async (req,res)=>{
    try {
        const {name,email,age} = req.body
        const student = await Student.create({
            name:name,
            email:email,
            age:age
        })
        res.status(201).send(student)

    } catch (error) {
        postError(res,error.message,500)
    }



    // const insertQuery = 'INSERT INTO Students (name,email,age) VALUES (?,?,?)'
    // db.execute(insertQuery,[name,email,age],(err,result)=>{
    //     if(err){
    //         return postError(res,err.message,500)
    //     }
    //     res.status(201).send(result)
    // })
}

const studentGet = (req,res)=>{
    db.execute('SELECT * FROM Students',(err,result)=>{
        if(err){
            return postError(res,err.message,500)
        }
        res.status(200).send(result)
    })
}


const studentPut = async (req,res)=>{

    try {
        const id = req.params.id;
        const {name,email,age} = req.body

        const student = await Student.findByPk(id)
        if(!student){
            return postError(res,'Student not found',404)
        }
        student.name = name
        student.email = email
        student.age = age
        await student.save()
        res.status(200).send(student)
    } catch (error) {
        postError(res,error.message,500)
    }
    

    // const updateQuery = 'UPDATE Students SET name = ?, email = ?, age = ? WHERE id = ?';

    // db.execute(updateQuery,[name,email,age,id],(err,result)=>{
    //     if(err){
    //         return postError(res,err.message,500);
    //     }
    //     res.status(200).send(result)
    // })
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

const studentDelete = async (req,res)=>{

    try {
        const id = req.params.id;

        const student = await Student.destroy({
            where:{
                id:id
            }
        })
        res.status(200).send(student)
        if(!student){
            return postError(res,'Student not found',404)
        }
        
    } catch (error) {
        postError(res,error.message,500)
    }

    // const deleteQuery = 'DELETE FROM Students WHERE id = ?';

    // db.execute(deleteQuery,[id],(err,result)=>{
    //     if(err){
    //         return postError(res,err.message,500);
    //     }
    //     res.status(200).send(result)
    // })

}


module.exports = {
    studentPost,
    studentGet,
    studentPut,
    studentGetId,
    studentDelete
};