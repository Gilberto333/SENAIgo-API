require('dotenv').config()

const express = require("express")
const server = express()
const PORTA = process.env.PORT || 3000
const usuarioRoutes = require("./src/routes/usuariosRouter")
const logger = require('./src/middlewares/logger')
const validarContentType = require("./src/middlewares/validarContentType")
const authRotas = require('./src/routes/authRouter')
const visitasRoutes = require("./src/routes/locaisVisitasRouter")

server.use(express.json())
server.use(validarContentType)
server.use(logger)
server.use('/auth', authRotas)
server.use(usuarioRoutes)
server.use(visitasRoutes)

server.listen(PORTA, () => console.log(`Servidor rodando em http://localhost:${PORTA}`))