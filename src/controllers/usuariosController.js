const usuariosModel = require("../models/usuariosModel")

function cadastrarUsuario(req, res){
    const dadosUsuario = req.body
    const usuario = usuariosModel.cadastrarUsuario(dadosUsuario)
    return res.status(201).json({sucesso: `Usuário cadastrado com sucesso!`, usuario})
}


module.exports = {cadastrarUsuario}