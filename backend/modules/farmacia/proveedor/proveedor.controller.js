const proveedores = require("../proveedor/proveedor.service");
const http = require("../../../utils/http");
const code = require("../../../utils/status");
const router = require("express").Router();

  router.get("/", proveedores.listarProveedores);

  router.post("/", proveedores.registrarProveedores);

  router.get('/getNombre/:nombre', proveedores.getLabByProveedor);

  router.put("/:id", proveedores.actualizarProveedor);


  module.exports = router;