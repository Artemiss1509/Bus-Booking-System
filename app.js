const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Artemiss1509',
  database:'testDB'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  const creationUsers = `create table IF NOT EXISTS Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );`
  const creationBuses =`create table IF NOT EXISTS Buses(
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber INT NOT NULL,
        totalSeats INT NOT NULL,
        availableSeats INT NOT NULL
    );`
  const creationBooking =`create table IF NOT EXISTS Bookings(
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT NOT NULL
    );`
  const creationPayments =`create table IF NOT EXISTS Payments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid INT NOT NULL,
        paymentStatus VARCHAR(255) NOT NULL
    );`;
    connection.execute(creationUsers,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log('Users table created successfully');
    })
    connection.execute(creationBuses,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log('Buses table created successfully');
    })
    connection.execute(creationBooking,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log('Bookings table created successfully');
    })
    connection.execute(creationPayments,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log('Payments table created successfully');
    })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
