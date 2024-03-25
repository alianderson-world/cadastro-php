document.addEventListener('DOMContentLoaded', function () {
  // Adicione as máscaras aos campos de input
  $('#cpf').inputmask('999.999.999-99');
  $('#celular').inputmask('(99) 9 9999-9999');
  $('#nascimento').inputmask('99/99/9999');

  // Função para ajustar dinamicamente os valores mínimo e máximo do campo de nascimento
  function ajustarLimitesData() {
    var inputNascimento = document.getElementById('nascimento');
    var nascimentoValue = inputNascimento.value.trim();

    // Verifica se a data está no formato correto (dd/mm/aaaa)
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(nascimentoValue)) {
      var year = parseInt(nascimentoValue.split('/')[2], 10);

      // Verifica se o ano está abaixo de 1900
      if (year < 1900) {
        // Define o valor máximo como 31/12/1899
        inputNascimento.setAttribute('max', '1899-12-31');
      } else if (year > 2005) {
        // Define o valor mínimo como 01/01/2006
        inputNascimento.setAttribute('min', '2006-01-01');
      } else {
        // Remove os atributos de min e max para restaurar os limites padrão
        inputNascimento.removeAttribute('min');
        inputNascimento.removeAttribute('max');
      }
    }
  }

  // Adiciona um ouvinte de evento ao campo de entrada de data para chamar a função de ajuste de limites sempre que o valor mudar
  $('#nascimento').on('input', ajustarLimitesData);

  // Chama a função inicialmente para ajustar os limites com base no valor atual do campo de entrada de data
  ajustarLimitesData();

});
