const express = require('express');
const db = require('./utils/DB-Connection');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busesRoutes');
const bookingRoutes = require('./routes/bookingsRoutes');
const paymentRoutes = require('./routes/paymentsRoutes');

const app = express();
app.use(express.json());


app.use('/Users',userRoutes)
app.use('/Buses',busRoutes)
app.use('/Bookings',bookingRoutes)
app.use('/Payments',paymentRoutes)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
