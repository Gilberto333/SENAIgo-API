const schema = {
    cadastro: {
        cpf: {obrigatorio: true, tipo: "string", min: 11, max: 11  },
 nome: {obrigatorio: true, tipo: "string", min:3},
 email: {obrigatorio: true, tipo: 'string', email: true },
 senha: {obrigatorio: true, tipo: 'string', min: 6}
    },

login: {
    email: {obrigatorio: true, email: true, tipo: 'string'},
    senha:{obrigatorio: true, min: 6, tipo:"string"}
}
}

module.exports = schema