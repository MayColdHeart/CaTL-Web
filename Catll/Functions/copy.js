function copyCall() {
    var elemento = document.getElementById('chamado');
    var texto = elemento.innerText;
    navigator.clipboard.writeText(texto).then(function() {
      console.log('Texto copiado com sucesso!');
    }, function(err) {
      console.error('Erro ao copiar texto:', err);
    });
  }

  function copyResp() {
    var elemento = document.getElementById('resposta');
    var texto = elemento.innerText;
    navigator.clipboard.writeText(texto).then(function() {
      console.log('Texto copiado com sucesso!');
    }, function(err) {
      console.error('Erro ao copiar texto:', err);
    });
  }
