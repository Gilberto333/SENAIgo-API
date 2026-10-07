const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')
const validarSchema = require('../middlewares/validarSchema')
const schema = require('../middlewares/schema')
const validarCpf = require("../middlewares/validarCPF")

router.post("/cadastrarUsuario",validarSchema(schema.cadastro) ,validarCpf,usuariosController.cadastrarUsuario)


module.exports = router