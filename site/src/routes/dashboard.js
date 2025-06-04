var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardcontroller");

router.get("/painel/:idUsuario", function(req, res) {
    dashboardController.painel(req, res);
})

router.get("/grafico", function (req, res) {
    dashboardController.grafico(req, res);
})


module.exports = router;