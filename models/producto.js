const { Schema, model} = require('mongoose');

const ProductoSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },

   precio:{
       type: Number,
       default: 0
   },

    estado:{
        type: Boolean,
        default: true
    },

    descripcion:{
        type: String
    }

   
})


module.exports = model('Producto', ProductosSchema);