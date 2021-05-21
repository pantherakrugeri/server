const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect("mongodb://localhost:27017/pathfinder", options).then(()=>{
    console.log('MongoDB is connected');
}).catch(err=>{
    console.log('MongoDB connection unsuccessful');
    console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;