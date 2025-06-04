window.onload = () => {
      pegarEstatisticas()
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
            console.log(exibirDados)

            if (exibirDados[0].Porcentagem == null) {
              Porcentagem.innerHTML = '0%'
            } else {
              Porcentagem.innerHTML = `${((100 / 8) * exibirDados[0].Porcentagem)}%`;
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
    }
