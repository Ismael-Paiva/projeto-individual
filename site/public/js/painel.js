window.onload = () => {
      pegarEstatisticas()
      grafico()
    }

    function pegarEstatisticas() {
        var idUsuario = sessionStorage.getItem('ID_USUARIO');
        
        fetch(`/dashboard/pegarEstatisticas/${idUsuario}`, {
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
            console.log(exibirDados)

            if (exibirDados[0].Porcentagem == null) {
              Porcentagem.innerHTML = '0%'
            } else {
              Porcentagem.innerHTML = ((100 / 8) * exibirDados[0].Porcentagem);
            }

            if (exibirDados[0].Respondidos == null) {
              Respondidos.innerHTML = 'Nenhum Quiz Respondido'
            } else {
              Respondidos.innerHTML = exibirDados[0].Respondidos;
            }

            if (exibirDados[0].fácil == null) {
              fácil.innerHTML = 'Sem tentativas'
            } else {
              fácil.innerHTML = exibirDados[0].fácil;
            }

            if (exibirDados[0].médio == null) {
              médio.innerHTML = 'Sem tentativas'
            } else {
              médio.innerHTML = exibirDados[0].médio;
            }

            if (exibirDados[0].difícil == null) {
              difícil.innerHTML = 'Sem tentativas'
            } else {
              difícil.innerHTML = exibirDados[0].difícil;
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
    }