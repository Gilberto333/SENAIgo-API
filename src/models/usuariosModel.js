const listaUsuarios = []
let id = 1

function cadastrarUsuario(dadosUsuario){
const usuario = {
    id: id ++,
cpf: dadosUsuario.cpf,
nome: dadosUsuario.nome,
email: dadosUsuario.email,
senha: dadosUsuario.senha
}
listaUsuarios.push(usuario)

return usuario

}

function buscarUsuarios (){
    return listaUsuarios
}

module.exports = {cadastrarUsuario, buscarUsuarios}