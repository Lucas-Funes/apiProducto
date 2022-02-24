const { Router } = require('express');
const { productosGet, productosPost, productosPut, productosDelete } = require('../controllers/productos');
const { check } = require('express-validator')


const router = Router();

//vamos a ir poniendo todas las rutas de mi api referido a lo de usuarios

router.get('/', productosGet);

router.post('/',[
    check('nombre', 'el campo del nombre es obligatorio' ).not().isEmpty(),
    check('precio', 'el campo precio es obligatorio').not().isEmpty(),
    check('estado', 'el campo estado es obligatoio').not().isEmpty(),
    check('descripcion', 'el campo descripcion es obligatorio').not().isEmpty(),
    validarcampos

], productosPost);

router.put('/:id', productosPut);

router.delete('/:id', productosDelete);



module.exports = router