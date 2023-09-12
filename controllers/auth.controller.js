const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.signupController = async(req,res,next)=>{


    const {email,name,password} = req.body;

    if(email===''||name===''||password==='')
    {
        res.status(400).json({message:"Todos los campos son requeridos"})
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if(!emailRegex.test(email)){
        res.status(400).json({message:"El correo es invalido"})
        return
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if(!passwordRegex.test(password)){
        res.status(400).json({message:"El Password es invalido debe contener 6 caracteres, 1 numero, 1 letra mayucula y 1 minuscula"})
        return
    }

    try {
        const user = await User.findOne({ email})
        if(user)
        {
            res.status(400).json({message:"Este correo ya existe"})
            return
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const createUser = await User.create({ email,name,password:hashedPassword})
        const {email:saveEmail,name:saveName,_id} =createUser

        res.status(201).json({user:{email:saveEmail,name:saveName,_id}})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'error'})
    }

}

exports.loginController = async(req,res,next)=>{

   try {
    const {email,password} = req.body;

    if(email===''||password==='')
    {
        res.status(400).json({message:"Todos los campos son requeridos"})
        return
    }
        const foundUser = await User.findOne({email})
        if(!foundUser)
        {
            res.status(401).json({message:"Usuario no encontrado"})
            return
        }

            const isPasswordCorrect = bcrypt.compareSync(password,foundUser.password)

            if(isPasswordCorrect)
            {
                const authToken = jwt.sign(
                    {_id:foundUser._id,email:foundUser.email,name:foundUser.name},
                    process.env.SECRET_KEY,
                    {algorithm:'HS256',expiresIn:'1h'}
                    )

                    res.status(200).json({authToken})
            }
   } catch (error) {
    
   } 
}


exports.verifyController = async(req,res,next)=>{

    console.log('req.payload: ', req.payload)
    res.status(200).json(req.payload)
}

/*
module.exports = {

    signupController,
    loginController,
    verifyController
}*/