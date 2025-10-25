const db = require('../utils/DB-Connection');
const postError = require('../utils/centralErrorHandle');
const Course = require('../models/coursesDb');
const Student = require('../models/studentDb');


const courseAdd = async (req,res)=>{
    try {
        const course = await Course.create(req.body)
        res.status(201).send(course)
    } catch (error) {
        postError(res,error.message,500)
    }
    
}

const studenttoCourse = async (req,res)=>{
    try {
        const {studentId,courseId} = req.body

        const student = await Student.findByPk(studentId)
        const course = await Course.findAll({
            where:{
                id:courseId
            }
        })
        if(!student || !course){
            return postError(res,'Student or Course not found',404)
        }
        await student.addCourse(course)
        const updatedStudent = await Student.findByPk(studentId,{include:Course});
        res.status(201).send(updatedStudent)
    } catch (error) {
        postError(res,error.message,500)
    }


}


module.exports = {
    courseAdd,
    studenttoCourse

};