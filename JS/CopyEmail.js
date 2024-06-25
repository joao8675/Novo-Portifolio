function copiarEmail() {
    // Seleciona o elemento com o endereço de email
    var email = document.getElementById('email');

    // Cria um campo de texto temporário para copiar o email
    var tempInput = document.createElement('input');
    tempInput.value = email.textContent;
    document.body.appendChild(tempInput);

    // Seleciona e copia o texto dentro do campo temporário
    tempInput.select();
    document.execCommand('copy');

    // Remove o campo temporário
    document.body.removeChild(tempInput);

    // Altera o estilo do botão para 'copied'
    var button = document.getElementById('copyButton');
    button.classList.add('copied');
    button.innerText = 'Copied';

    // Mostra uma mensagem de feedback por alguns segundos
    setTimeout(function() {
      button.innerText = 'Copy Email';
      button.classList.remove('copied');
    }, 2000); // Volta ao texto original após 2 segundos
  }

  //download cv:

  document.getElementById('download-link').addEventListener('click', function (event) {
    event.preventDefault();
    const url = this.href;

    // Abre o CV em uma nova guia
    window.open(url, '_blank');

    // Cria um elemento de âncora temporário para forçar o download
    const link = document.createElement('a');
    link.href = url;
    link.download = '../Styles/Assets/Curriculo.pdf';

    // Adiciona ao documento, clica no link e remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});