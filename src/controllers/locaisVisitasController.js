const visitasModel = require("../models/locaisVisitasModel")

function registrarVisitas(req, res) {
  const { nome, id } = req.usuario || {}
  const { salaId, sala, pontos } = req.body

  if (!nome || !id || !salaId || !sala) {
    return res.status(400).json({ erro: "Dados incompletos para registrar a visita." })
  }

  const localDeVisita = visitasModel.salvarVisita(nome, id, salaId, sala, pontos)

  return res.status(201).json({ sucesso: "Visita registrada com sucesso!", localDeVisita })
}








 















function listarVisitas (req, res){
const todasVisitas = visitasModel.listarVisitas()
if(todasVisitas === null){
    return res.josn({erro: "nao tem"})
}
return res.json(todasVisitas)
}


module.exports = { registrarVisitas, listarVisitas }