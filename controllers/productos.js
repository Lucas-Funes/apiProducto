const Producto = require('../models/usuario')


const productosGet = async ( req, res ) => {
    const producto = await Producto.find()

    res.status(200).json({
        msg: 'GET PRODUCTOS',
        producto
    })
}



const productosPost = async ( req, res ) => {
    const { nombre, precio, estado, descripcion} = req.body  

    const producto = new Producto( { nombre, precio, estado, descripcion } )

    await producto.save()

    res.status(200).json({
        msg: 'POST PRODUCTOS',
        producto
    })
}



const productosPut = async ( req, res ) => {
    const { id } = req.params
    const {_id, descripcion, nombre, ...resto} = req.body

    
    
    const producto = await Producto.findByIdAndUpdate(id, resto)

    res.status(200).json({
        msg: 'PUT PRODUCTOS',
        producto
    })
}



const productosDelete = async ( req, res ) => {
    const { id } = req.params
    


    const producto = await Producto.findByIdAndUpdate(id)


    res.status(200).json({
        msg: 'DELETE PRODUCTOS',
        producto
    })
}


module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}