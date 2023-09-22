const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/My_Database');
        console.log('Connect to database successfull')
    } catch (error) {
        console.log('Fail to connect to database')
    }
    
}

module.exports = { connect }