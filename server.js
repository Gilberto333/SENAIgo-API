require ('dotenv').config()

const express = require("express")
const server = express()
const PORTA = 3000
const usuarioRoutes = require("./src/routes/usuariosRouter")
const logger = require('./src/middlewares/logger')
const validarContentType = require("./src/middlewares/validarContetType")
const authRotas = require('./src/routes/authRouter')

server.use(express.json())
server.use('/auth', authRotas)
server.use(validarContentType)
server.use(logger)
server.use(usuarioRoutes)


server.listen(PORTA, () => console.log(`servidor rodando em http://localhost:${PORTA}`))