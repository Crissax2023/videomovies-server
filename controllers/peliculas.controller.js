const getAllPeliculas = (req,res,next) =>{
    res.status(200).json({message:'todas las peliculas'})
}

const createPelicula = (req,res,next) =>{
    res.status(201).json({message:'nueva pelicula'})
}

const getOnePelicula = (req,res,next) =>{

    const {peliculasId} = req.params
    res.status.json({message:`este es el id pelicula: ${peliculasId}`})
}

const updatePelicula = (req,res,next) =>{

    const {peliculasId} = req.params
    res.status.json({message:`este es el update pelicula: ${peliculasId}`})
}

const deletePelicula = (req,res,next) =>{

    const {peliculasId} = req.params
    res.status.json({message:`este es el id delete pelicula: ${peliculasId}`})
}

module.exports =
{
    getAllPeliculas,
    createPelicula,
    getOnePelicula,
    updatePelicula,
    deletePelicula
} 