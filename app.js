const express = require('express');
const db = require('./utils/DB-Connection');
// const userRoutes = require('./routes/userRoutes');
// const busRoutes = require('./routes/busesRoutes');
// const bookingRoutes = require('./routes/bookingsRoutes');
// const paymentRoutes = require('./routes/paymentsRoutes');

const studentRoutes = require('./routes/studentRoutes');
const studentModel = require('./models/studentDb');



const app = express();
app.use(express.json());

app.use('/students',studentRoutes)

// app.use('/Users',userRoutes)
// app.use('/Buses',busRoutes)
// app.use('/Bookings',bookingRoutes)
// app.use('/Payments',paymentRoutes)

db.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
}).catch((error) => {
  console.error('Error syncing database:', error);
})



// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
