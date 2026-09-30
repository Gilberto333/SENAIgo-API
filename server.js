const express = require("express")
const server = express()
const PORTA = 3000


server.listen(PORTA, () => console.log(`servidor rodando em http://localhost:${PORTA}`))