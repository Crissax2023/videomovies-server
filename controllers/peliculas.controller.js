const mongoose = require('mongoose');
const video = require('../models/video.model')

const getAllPeliculas = async(req,res,next) =>{

    try {
        const videos =  await video
        .find()
        .populate('comentarios')
        res.status(200).json(videos)
    } catch (error) {
        res.status(500).json(error)
    }
    //res.status(200).json({message:'todas las peliculas'})
}

const createPelicula = async(req,res,next) =>{

    const {
        title,
        year,
        director,
        duracion,
        genero,
        url
    } =req.body

    try{
        const newVideo= await video.create({        
            title,
            year,
            director,
            duracion,
            genero,
            url,
        comentarios:[]
        })
            res.status(201).json(newVideo)
    }catch(e){

        res.status(500).json(e)

    }

}

const getOnePelicula = async (req,res,next) =>{

    const {peliculasId} = req.params

    try{

           if(!mongoose.Types.ObjectId.isValid(peliculasId)) 
            {
                res.status(400).json({message:'ID incorrecto'})
                return
            }
            const Video = await video.findById(peliculasId)
            .populate('comentarios')
            res.status(200).json(Video)
    }catch(e){
        res.status(500).json(e)
    }


    ///res.status.json({message:`este es el id pelicula: ${peliculasId}`})
}

const updatePelicula = async (req,res,next) =>{

    const {peliculasId} = req.params
try{
    if(!mongoose.Types.ObjectId.isValid(peliculasId)) 
         {
             res.status(400).json({message:'ID incorrecto'})
             return
         }

         const updatevideo = await video.findByIdAndUpdate(peliculasId, req.body, {new:true})
         res.status(200).json(updatevideo)
        }
    catch(e){
        res.status(500).json(e)
    }

    //res.status.json({message:`este es el update pelicula: ${peliculasId}`})
}

const deletePelicula = async(req,res,next) =>{

    const {peliculasId} = req.params
    try{

        if(!mongoose.Types.ObjectId.isValid(peliculasId)) 
         {
             res.status(400).json({message:'ID incorrecto'})
             return
         }
         const Video = await video.findByIdAndRemove(peliculasId)
         res.status(200).json({message:`Video Eliminado id ${peliculasId}`})
 }catch(e){
     res.status(500).json(e)
 }
  
  
  
    // res.status.json({message:`este es el id delete pelicula: ${peliculasId}`})
}

module.exports =
{
    getAllPeliculas,
    createPelicula,
    getOnePelicula,
    updatePelicula,
    deletePelicula
} 