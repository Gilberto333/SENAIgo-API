const express = require("express")
const router = express.Router()
const visitasController = require("../controllers/locaisVisitasController")
const middlewareAutenticar = require("../middlewares/autenticar")

router.post("/registrarLocal", middlewareAutenticar, visitasController.registrarVisitas)


module.exports = router