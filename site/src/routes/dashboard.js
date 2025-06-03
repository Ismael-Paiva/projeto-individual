var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardcontroller");

router.get("/painel/:idUsuario", function(req, res) {
    estatisticasController.pegarEstatisticas(req, res);
})

router.get("/grafico/:idUsuario", function (req, res) {
    estatisticasController.grafico1(req, res);
})


module.exports = router;