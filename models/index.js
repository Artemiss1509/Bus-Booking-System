const User = require('../models/userDb');
const Bookings = require('../models/bookingDb');
const Payments = require('../models/paymentDb');
const Buses = require('../models/busesDb');


//one to many
User.hasMany(Bookings);
Bookings.belongsTo(User);

//one to many
Buses.hasMany(Bookings);
Bookings.belongsTo(Buses);

module.exports = {
    User,
    Bookings,
    Payments,
    Buses
}