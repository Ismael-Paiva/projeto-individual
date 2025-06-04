var database = require("../database/config");


function painel(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function painel():", idUsuario);

    var instrucaoSql = `
            SELECT count(*) as Porcentagem from visualizacao
            WHERE fkIdUsuario = ${idUsuario};
            `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

function jogados(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function painel():", idUsuario);

    var instrucaoSql = `
            SELECT COUNT(DISTINCT fkIdQuiz) AS respondidos FROM tentativas WHERE fkIdUsuarioQuiz = ${idUsuario} AND jogado = 1;
            `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

function pontuacao(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function painel():", idUsuario);

    var instrucaoSql = `
            select max(pontuação) as pontuação from tentativas where fkIdQuiz in (1, 2, 3) and fkIdUsuarioQuiz = ${idUsuario} group by fkIdUsuarioQuiz, fkIdQuiz;
            `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

function grafico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function painel():",);

    var instrucaoSql = `SELECT count(visto) as visto from visualizacao where fkIdCapitulos in (1, 2, 3, 4, 5, 6, 7, 8) group by fkIdCapitulos;`
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

module.exports = {
    painel,
    grafico,
    jogados,
    pontuacao
}