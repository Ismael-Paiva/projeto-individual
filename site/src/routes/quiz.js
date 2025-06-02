var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizcontroller");

router.post("/fazerquiz/:id", function (req, res) {
    quizController.fazerquiz(req, res);
})

module.exports = router;