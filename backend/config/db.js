const monogoose = require('mongoose')

const connectDB = async()=>{
    try{

        await monogoose.connect("mongodb://localhost:27017/login-reg")
        console.log('DB connected successfully')

    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB