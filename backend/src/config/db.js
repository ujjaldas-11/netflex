const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(()=> {
            console.log('db connected');
            
        })
        .catch(err=> {
            console.log('something went wrong!',err)
            process.exit(1);
        })
}


module.exports = connectToDB