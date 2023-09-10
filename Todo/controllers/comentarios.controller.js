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


const deletecomentario = async(req,res,next)=>{

    const {comentarioId} =req.params

    try{

        await coment.deleteOne(comentarioId)
        res.status(200).json({message:"Eliminado",comentarioId})

    }catch(e){
        res.status(500).json(e)
    }

}

module.exports ={
    createcomentarios,
    deletecomentario
}