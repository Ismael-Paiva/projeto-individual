var quizModel = require("../models/lidoModel");


function visualizado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.params.id;
    var fk = req.body.fkServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu id está Indefinido!");
    } else if (fk == undefined) {
        res.status(400).send("Sua visualização está Indefinido!");
    } else {
        quizModel.cadastrar(idUsuario, fk)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    visualizado
}