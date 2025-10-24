const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');
const user = require('../models/userDb');


const userPost = async (req,res)=>{

    try {
        const {name,email} = req.body

        const newUser = await user.create({
            name:name,
            email:email
        })
        res.status(201).send(newUser)
    } catch (error) {
        postError(res,error.message,500)
    }
    // const insertQuery = 'INSERT INTO Users (name,email) VALUES (?,?)'

    // db.execute(insertQuery,[name,email],(err,result)=>{
    //     if(err){
    //         // console.log(err.message)
    //         // res.status(500).send(err.message)
    //         return postError(res,err.message,500)
    //     }
    //     console.log(result)
    //     res.status(201).send(result)
    // })

}

const userPut = async(req,res)=>{

    try {
        const id = req.params.id;
        const {name,email} = req.body

        const updateQuery =  await user.findByPk(id)
        if(!updateQuery){
            return postError(res,'User not found',404)
        }
        updateQuery.name = name
        updateQuery.email = email
        await updateQuery.save()
        res.status(200).send(updateQuery)
    } catch (error) {
        postError(res,error.message,500)
    }
    
    

    // const updateQuery = 'UPDATE Users SET name = ?, email = ? WHERE id = ?';

    // db.execute(updateQuery,[name,email,id],(err,result)=>{
    //     if(err){
    //         return postError(res,err.message,500);
    //     }
    //     res.status(200).send(result)
    // })
};

const userDelete = async (req,res)=>{

    try {
        const id = req.params.id;
        const deleteQuery =  await user.destroy({
            where:{
                id:id
            }
        })
        res.status(200).send(deleteQuery)
        if(!deleteQuery){
            return postError(res,'User not found',404)
        }
    } catch (error) {
        postError(res,error.message,500)
    }

}

const userGet = async(req,res)=>{

    try {
        const users = await user.findAll()
        res.status(200).send(users)
    } catch (error) {
        postError(res,error.message,500)
    }
    
}



module.exports = {
    userPost,
    userPut,
    userDelete,
    userGet
};