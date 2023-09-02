const {Router} = require('express')
const {createcomentarios} = require('../controllers/comentarios.controller')
const router = Router()

router.post('/',createcomentarios)

module.exports = router