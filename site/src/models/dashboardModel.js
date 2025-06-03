var database = require("../database/config");


function painel(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function painel():", idUsuario);

    var instrucaoSql = `
            SELECT 
                ROUND(AVG(tempo_segundos)) AS tempo,
                ROUND(AVG(qtd_erros)) AS erros,
                MAX(pontuacao) AS pontos,
                COUNT(idPartida) AS partidas
            FROM TB_Partidas p JOIN TB_Usuarios u 
            ON p.idUsuario = u.idUsuario 
            WHERE p.idUsuario = ${idUsuario};
            `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

module.exports = {
    painel,
    grafico
}