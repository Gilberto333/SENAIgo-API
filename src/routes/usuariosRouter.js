const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')

router.post("/cadastrarUsuario", usuariosController.cadastrarUsuario)
router.get( "/usuarios",usuariosController.buscarUsuarios )
module.exports = router