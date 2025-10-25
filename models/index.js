const Student = require('./studentDb');
const IdentityCard = require('./identityDb');
const Department = require('./departmentDb');
const Courses = require('./coursesDb');
const studentCourses = require('./studentCoursesDb');

//one-to-one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one-to-many
Department.hasMany(Student);
Student.belongsTo(Department);

//many-to-many
Courses.belongsToMany(Student,{through:studentCourses});
Student.belongsToMany(Courses,{through:studentCourses});


module.exports = {
    Student,
    IdentityCard,
    Department,
    Courses,
    studentCourses
}