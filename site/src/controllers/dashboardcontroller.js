var dashboardModel = require("../models/dashboardModel");

function painel(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        console.log('idUsuario está indefinido!')
    } else {
        dashboardModel.painel(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao buscar dados das KPIs! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}


module.exports = {
    painel,
    grafico
}