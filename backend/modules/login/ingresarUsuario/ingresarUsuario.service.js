const usuario = require("./ingresarUsuario.model");
const jwt = require("jsonwebtoken");

const usuarioService = {};

usuarioService.login = async (req, res) => {
  usuario.findOne({ user: req.body.user }, function (err, user) {
    if (err) {
      res.json(err);
    }

    if (user == null) {
      let data = {
        ingreso: false,
      };
      res.json(data);
    } else {
      let pass = req.body.contra.localeCompare(user.contra); 
      if (pass != 0) {
        let data = {
          ingreso: false,
        };
        res.json(data);
      } else {
        let data = {
          usuario: user,
          token: jwt.sign({ user }, "123"),
          ingreso: true,
        };
        res.json(data);
      }
    }
  });
};

usuarioService.user = async (req, res) => {
  const usuario2 = await usuario.find();
  res.json(usuario2);
};

module.exports = usuarioService;
