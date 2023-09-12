const router = require("express").Router();
const peliculasRouter = require("./peliculas.routes")
const comentariosRouter = require("./comentarios.routes")
const {isAuthenticated} = require('../middlewares/jwt.middleware')

router.use('/peliculas',isAuthenticated,peliculasRouter)

router.use('/comentarios',isAuthenticated,comentariosRouter)

module.exports = router;
