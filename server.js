const express = require("express")
const server = express()
const PORTA = 3000
const usuarioRoutes = require("./src/routes/usuariosRouter")
const logger = require('./src/middlewares/logger')
const validarContentType = require("./src/middlewares/validarContetType")
server.use(express.json())
server.use(validarContentType)
server.use(logger)
server.use(usuarioRoutes)


server.listen(PORTA, () => console.log(`servidor rodando em http://localhost:${PORTA}`))