const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');
const { check } = require('express-validator')
const {validarcampos} = require('../middlewares/validar-campos')

const router = Router();

//vamos a ir poniendo todas las rutas de mi api referido a lo de usuarios

router.get('/', usuariosGet);

router.post('/',[
    check('nombre', 'el campo del nombre es obligatorio' ).not().isEmpty(),
    check('password', 'el campo password es obligatorio').not().isEmpty().isLength({min: 6, max: 12}),
    check('correo', 'el campo correo es obligatorio').not().isEmpty().isEmail(), 
    check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER-ROLE']),
    validarcampos

], usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/:id', usuariosDelete);



module.exports = router