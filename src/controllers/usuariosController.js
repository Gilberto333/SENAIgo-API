const usuariosModel = require("../models/usuariosModel")

function cadastrarUsuario(req, res){
    const dadosUsuario = req.body
    const usuario = usuariosModel.cadastrarUsuario(dadosUsuario)
    return res.status(201).json({sucesso: `Usuário cadastrado com sucesso!`, usuario})
}
function buscarUsuarios(req, res){
    const usuarios = usuariosModel.buscarUsuarios()
    if(usuarios.length === 0 ){
        return res.status(400).json({erro: "Não há usuários cadastrados"})
    }
    return res.status(200).json({sucesso: "Ok! Aqui está sua lista atual de usuários", usuarios})
}
module.exports = {cadastrarUsuario, buscarUsuarios}