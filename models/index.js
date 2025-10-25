const Student = require('./studentDb');
const IdentityCard = require('./identityDb');
const Department = require('./departmentDb');



Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Department.hasMany(Student);
Student.belongsTo(Department);


module.exports = {
    Student,
    IdentityCard,
    Department
}