const router = require("express").Router();
const peliculasRouter = require("./peliculas.routes")

/*
router.get("/", (req, res, next) => {
  res.status(200).json({message:'BIENVENIDO A TOPELIS API'});
});
*/

router.use('/peliculas',peliculasRouter)

module.exports = router;
