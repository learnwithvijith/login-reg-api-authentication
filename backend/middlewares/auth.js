const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{

    const token = req.header('Authorization')?.replace('Bearer ','')
    if(!token) return res.status(401).json({
        message:'No token, Access denied'
    }) 
    try{
        const decode = jwt.verify(token,'secret')
        req.user = decode.user
        next()
    }catch(error){
        console.log(error)
    }
}

module.exports = {authMiddleware}