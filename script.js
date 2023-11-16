/* ESTRUTURA DE DECIÇÃO */ 
document.addEventListener('DOMContentLoaded', function () {
    function obterMsg() {
      const horaAtual = new Date().getHours();
  
      if (horaAtual >= 5 && horaAtual < 12) {
        return 'Bom dia';
      } else if (horaAtual >= 12 && horaAtual < 18) {
        return 'Boa tarde';
      } else {
        return 'Boa noite';
      }
    }
    alert(`Olá! ${obterMsg()}. Bem-vindo ao nosso site!`);
  });
  
  
  /* função */ 
  const url = "https://www.bugatti.com"
  const btn = document.querySelector('#btn')
  
  function openInNewTab(url) {
      const win = window.open(url, '_blank')
      win.focus()
  }
  
  btn.addEventListener('click', () => {
      openInNewTab(url)
  })


 /* ESTRUTURA DE LAÇO */
document.addEventListener('DOMContentLoaded', function () {
    const carrosDeLuxo = ['Buggati', 'Pagani', 'Koenigsegg', 'Ferrari', 'Lamborghini', 'Mercedes', 'McLaren', 'Porsche', 'Audi', 'BMW'];
    let i = 0;
    while (i < carrosDeLuxo.length) {
        const elemento = document.querySelectorAll('.nav-list li')[i];
        elemento.addEventListener('click', function () {
            const carroClicado = this.textContent;
            exibirInformacoesDoCarro(carroClicado);
        });
        i++;
    }
    function exibirInformacoesDoCarro(carro) {
        const informacoes = obterInformacoesCarro(carro);

        if (informacoes) {
            alert(`Informações sobre o ${carro}:\nModelo: ${informacoes.modelo}\nVelocidade Máxima: ${informacoes.velocidade}\nValor: ${informacoes.valor}`);
        } else {
            alert(`Informações não disponíveis para o ${carro}`);
        }
    }
    function obterInformacoesCarro(carro) {
        switch (carro) {
            case 'Buggati':
                return {
                    modelo: 'Buggati La Voiture',
                    velocidade: '420 km/h',
                    valor: '$3 milhões'
                };
            case 'Pagani':
                return {
                    modelo: 'Pagani Huayra',
                    velocidade: '370 km/h',
                    valor: '$2.8 milhões'
                };
            default:
                return null; 
        }
    }
});

/* CSS COM JAVASCRIPT */

document.addEventListener('DOMContentLoaded', function () {
    const saibaMaisLink = document.getElementById('saiba-mais');

    saibaMaisLink.addEventListener('click', function () {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const corAleatoria = `rgb(${red}, ${green}, ${blue})`;
        
        saibaMaisLink.style.color = corAleatoria;
    });
});

