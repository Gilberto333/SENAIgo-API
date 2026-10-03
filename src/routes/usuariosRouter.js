const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')
const validarSchema = require('../middlewares/validarSchema')
const schema = require('../middlewares/schema')


router.post("/cadastrarUsuario",validarSchema(schema.cadastro) ,usuariosController.cadastrarUsuario)
router.get( "/usuarios",usuariosController.buscarUsuarios )
router.post('/login', validarSchema(schema.login), usuariosController.login)
module.exports = router