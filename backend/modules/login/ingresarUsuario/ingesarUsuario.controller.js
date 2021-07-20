const router = require("express").Router();
const usuarios = require("./ingresarUsuario.service");


router.post("/", usuarios.login);

router.get('/',usuarios.user);


module.exports = router;