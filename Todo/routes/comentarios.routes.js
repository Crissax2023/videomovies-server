const {Router} = require('express')
const {createcomentarios, deletecomentario} = require('../controllers/comentarios.controller')
const router = Router()

router.post('/',createcomentarios)
router.delete('/:comentariosId',deletecomentario)

module.exports = router