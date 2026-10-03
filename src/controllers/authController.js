const jwt = require('jsonwebtoken')
const usuariosModel = require('../models/usuariosModel')

function login (req, res ){
const {email, senha} = req.body
const usuarioLogin = usuariosModel.login(email, senha)

if(usuarioLogin === null){
     return res.status(400).json({erro: "Este email e senha não existem. Verifique se já realizou o cadastro"})
}
 const token = jwt.sign(
    {id:usuarioLogin.id, nome: usuarioLogin.nome },

    process.env.JWT_SECRET ,

    {expiresIn: '8h'}

)


return res.status(200).json({sucesso: 'Login efetuado com sucesso', usuarioLogin, token})

}

module.exports = login