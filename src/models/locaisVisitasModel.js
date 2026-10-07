const historicoVisitas = []

function salvarVisita(usuario, id, salaId, sala, pontos) {
  const localVisitado = {
    id: id,
    nome: usuario,
    salaId: salaId,
    sala: sala,
    criadoEm: new Date(),
    pontuacao: pontos
  }

  historicoVisitas.push(localVisitado)
  return localVisitado
}

module.exports = { salvarVisita }