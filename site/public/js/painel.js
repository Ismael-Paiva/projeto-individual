window.onload = () => {
      pegarEstatisticas(),
      validarSessao(), 
      grafico(),
      jogados(),
      pontuacao()
    }

    function pegarEstatisticas() {
        var idUsuario = sessionStorage.getItem('ID_USUARIO');
        
        fetch(`/dashboard/painel/${idUsuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function (resposta) {
            console.log(resposta);
    
            if (resposta.ok) {
              console.log('Busquei os dados das KPIs', resposta)
              return resposta.json();
            } else {
              throw "Erro ao buscar dados no data base";
            }
          })
          .then(function (exibirDados) {
            console.log(exibirDados);

        var elementoPorcentagem = document.getElementById("Porcentagem");

        if (exibirDados[0]?.Porcentagem == undefined) {
            elementoPorcentagem.innerHTML = '0%';
        } else {
            elementoPorcentagem.innerHTML = `${((100 / 8) * exibirDados[0].Porcentagem)}%`;
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    }

    function jogados() {
        var idUsuario = sessionStorage.getItem('ID_USUARIO');
        fetch(`/dashboard/jogados/${idUsuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function (resposta) {
            console.log(resposta);
    
            if (resposta.ok) {
              console.log('Busquei os dados das KPIs', resposta)
              return resposta.json();
            } else {
              throw "Erro ao buscar dados no data base";
            }
          })
          .then(function (exibirDados) {
            console.log(exibirDados);

        var elementoRespondidos = document.getElementById("Respondidos");

        if (exibirDados[0]?.respondidos == undefined) {
            elementoRespondidos.innerHTML = '0 / 3';
        } else {
            elementoRespondidos.innerHTML = `${(exibirDados[0].respondidos)} / 3`;
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    }

    function pontuacao() {
        var idUsuario = sessionStorage.getItem('ID_USUARIO');
        fetch(`/dashboard/pontuacao/${idUsuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function (resposta) {
            console.log(resposta);
    
            if (resposta.ok) {
              console.log('Busquei os dados das KPIs', resposta)
              return resposta.json();
            } else {
              throw "Erro ao buscar dados no data base";
            }
          })
          .then(function (exibirDados) {
            console.log(exibirDados);

        var elementofacil = document.getElementById("fácil");
        var elementomedio = document.getElementById("médio");
        var elementodificil = document.getElementById("difícil");

        if (exibirDados[0]?.pontuação == undefined) {
            elementofacil.innerHTML = '0 / 10';
        } else {
            elementofacil.innerHTML = `${(exibirDados[0].pontuação)} / 10`;
        }

        if (exibirDados[1]?.pontuação == undefined) {
            elementomedio.innerHTML = '0 / 10';
        } else {
            elementomedio.innerHTML = `${(exibirDados[1].pontuação)} / 10`;
        }

        if (exibirDados[2]?.pontuação == undefined) {
            elementodificil.innerHTML = '0 / 10';
        } else {
            elementodificil.innerHTML = `${(exibirDados[2].pontuação)} / 10`;
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    }

