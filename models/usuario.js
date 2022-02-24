const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    correo:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },

    password:{
        type: String,
        required: [true, 'El password es obligatorio']
    },

    img:{
        type: String
    },

    rol:{
        type: String,
        required: true,
        default: 'USER_ROL',
        emun: ['ADMIN_ROL', 'USER_ROLE']
    },

    estado:{
        type: Boolean,
        default: true
    },

    google:{
        type: Boolean,
        default: true
    },
})


module.exports = model('Usuario', UsuarioSchema);