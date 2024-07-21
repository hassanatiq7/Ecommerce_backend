const mongoose = require('mongoose');

const db_connection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useNewURLParser : true
        })

            console.log(`Connected succesfully.`)
        
    } catch (error) {
        console.log(`error message:${error.message}`)
        process.exit(1)
    }
}

module.exports = db_connection