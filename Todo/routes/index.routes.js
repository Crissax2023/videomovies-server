const router = require("express").Router();
const peliculasRouter = require("./peliculas.routes")
const comentariosRouter = require("./comentarios.routes")

router.use('/peliculas',peliculasRouter)

router.use('/comentarios',comentariosRouter)

module.exports = router;
