const visitasModel = require("../models/locaisVisitasModel")

function verificarVisita(req, res, next){
    const verificador = visitasModel.listarVisitas()
const {nome, id} = req.usuario
const {salaId, sala, pontos} = req.body

const registrado = verificador.find(v => v.nome === nome || v.id === id || v.sala === sala || v.salaId === salaId || v.pontos === pontos)
if(registrado){
    return res.status(401).json({erro: "O local já foi visitado!"})
}

next()

}
module.exports = verificarVisita
