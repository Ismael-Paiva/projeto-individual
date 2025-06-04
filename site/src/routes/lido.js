var express = require("express");
var router = express.Router();

var lidoController = require("../controllers/lidocontroller");

router.post("/visualizado/:id", function (req, res) {
    lidoController.visualizado(req, res);
})

router.get("/Visto/:id", function (req, res) {
    lidoController.visto(req, res);
})

module.exports = router;