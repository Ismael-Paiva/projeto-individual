var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardcontroller");

router.get("/painel/:idUsuario", function(req, res) {
    dashboardController.painel(req, res);
})

router.get("/jogados/:idUsuario", function(req, res) {
    dashboardController.jogados(req, res);
})

router.get("/pontuacao/:idUsuario", function(req, res) {
    dashboardController.pontuacao(req, res);
})

router.get("/grafico", function (req, res) {
    dashboardController.grafico(req, res);
})


module.exports = router;