
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
const bcryptjs = require('bcryptjs')


const usuariosGet = async ( req, res ) => {
    const usuario = await Usuario.find()

    res.status(200).json({
        msg: 'GET USUARIOS',
        usuario
    })
}



const usuariosPost = async ( req, res ) => {
    const { nombre, correo, password, rol} = req.body  

    const usuario = new Usuario( { nombre, correo, password, rol } )

    const salt = bcryptjs.genSaltSync(10)

    usuario.password = bcryptjs.hashSync( password, salt);


    await usuario.save()

    res.status(200).json({
        msg: 'POST USUARIOS',
        usuario
    })
}



const usuariosPut = async ( req, res ) => {
    const { id } = req.params
    const {_id, password, google, ...resto} = req.body

    
    
    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.status(200).json({
        msg: 'PUT USUARIOS',
        usuario
    })
}



const usuariosDelete = async ( req, res ) => {
    const { id } = req.params
    


    const usuario = await Usuario.findByIdAndUpdate(id)


    res.status(200).json({
        msg: 'DELETE USUARIOS',
        usuario
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}