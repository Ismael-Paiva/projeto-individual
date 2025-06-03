var express = require("express");
var router = express.Router();

var lidoController = require("../controllers/lidoontroller");

router.post("/visualizado/:id", function (req, res) {
    lidoController.lido(req, res);
})

module.exports = router;