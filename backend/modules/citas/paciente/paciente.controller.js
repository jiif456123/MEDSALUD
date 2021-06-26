const http = require('../../../utils/http');
const code = require('../../../utils/status');
const router = require('express').Router();


router.get('/', (req, res) => {
    http.ok(req, res, code.status.Ok.code, { ok: 'paciente' })
})

module.exports = router;