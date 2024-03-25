  // Função para animar a barra de progresso
  function animateProgressBar(duration) {
    const progressBar = document.getElementById('progress');
    progressBar.style.transition = `width ${duration}s linear`;
    progressBar.style.width = '100%';
  }

  // Função para contagem regressiva e redirecionamento
  function countdown() {
    const countdownElement = document.getElementById('countdown');
    let countdownValue = 15;
    countdownElement.textContent = countdownValue;

    const countdownInterval = setInterval(() => {
      countdownValue--;
      countdownElement.textContent = countdownValue;
      if (countdownValue === 0) {
        clearInterval(countdownInterval);
        // Redirecionamento após o término da contagem regressiva
        window.location.href = 'https://alianderson-world.vercel.app/'; // Substitua com sua URL desejada
      }
    }, 1000);

    // Inicia a animação da barra de progresso
    animateProgressBar(15);
  }

  // Chama a função countdown assim que o conteúdo da página é carregado
  window.addEventListener('load', countdown);