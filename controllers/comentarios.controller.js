const coment = require('../models/comentario.model')
const video = require('../models/video.model')

const createcomentarios = async(req,res,next)=>{
    const {
        Nombre,
        Rating,
        year,
        comentarios,
        peliculasId

    }=req.body

    try {
        const newcomentarios = await coment.create({
            Nombre,
            Rating,
            year,
            comentarios,
            peliculasId
        })
        await video.findByIdAndUpdate(
            peliculasId,
            {$push:{comentarios:newcomentarios._id}}
        )
        res.status(201).json(newcomentarios)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports ={
    createcomentarios
}