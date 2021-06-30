<<<<<<< HEAD
  const proveedores = require("../proveedor/proveedor.service");
  const proveedor = require("../proveedor/proveedor.model");
  const http = require("../../../utils/http");
  const code = require("../../../utils/status");
  const router = require("express").Router();

  router.get("/", proveedores.listarProveedores);

  router.post("/", proveedores.registrarProveedores);

  router.get('/getNombre/:nombre', proveedores.getLabByProveedor);

  router.put("/:id", proveedores.actualizarProveedor);


  module.exports = router;
=======
const proveedores = require("../proveedor/proveedor.service");
const proveedor = require("../proveedor/proveedor.model");
const http = require("../../../utils/http");
const code = require("../../../utils/status");
const router = require("express").Router();

router.get("/", proveedores.listarProveedores);

router.post("/", proveedores.registrarProveedores);

router.put("/:id",proveedores.actualizarProveedor);

module.exports = router;
>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6
