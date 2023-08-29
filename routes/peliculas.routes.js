const {Router} = require('express')
const {
    getAllPeliculas,
    createPelicula,
    getOnePelicula,
    updatePelicula,
    deletePelicula
    } = require('../controllers/peliculas.controller')

const router = Router()

router.get('/',getAllPeliculas)
router.post('/',createPelicula)


router.get('/:peliculasId',getOnePelicula)
router.put('/:peliculasId',updatePelicula)
router.delete('/:peliculasId',deletePelicula)

module.exports = router