const proveedores = require('../proveedor/proveedor.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const router = require('express').Router();


router.get('/',proveedores.listarProveedores);


router.post('/',proveedores.registrarProveedores);

module.exports=router;