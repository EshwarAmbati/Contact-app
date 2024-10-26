const mongoose  = require('mongoose');

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DataBase Connected",
            connect.connection.host,
            connect.connection.port

        );
    }catch(err){
        console.log(err);
    }
};

module.exports = connectDb;