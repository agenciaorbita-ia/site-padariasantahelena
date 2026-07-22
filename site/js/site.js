/* Padaria Santa Helena — comportamento do site
   Sem biblioteca externa. IntersectionObserver + CSS fazem o trabalho. */
(function () {
  'use strict';

  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------
     1. Está aberto agora?
     Segunda a sábado, 5h45 às 20h. Domingo fechado.
     Roda no relógio de quem está visitando.
     --------------------------------------------------------------- */
  var ABRE = 5 * 60 + 45;   // 05:45 em minutos
  var FECHA = 20 * 60;      // 20:00 em minutos

  function estadoDaLoja(agora) {
    var dia = agora.getDay();               // 0 = domingo
    var min = agora.getHours() * 60 + agora.getMinutes();
    var ehDiaUtil = dia >= 1 && dia <= 6;

    if (ehDiaUtil && min >= ABRE && min < FECHA) {
      var faltam = FECHA - min;
      return {
        estado: 'aberto',
        texto: faltam <= 60
          ? 'Aberto agora · fecha em ' + faltam + ' min'
          : 'Aberto agora · até às 20h'
      };
    }

    // fechado: descobre quando abre de novo
    var proximo = new Date(agora.getTime());
    if (ehDiaUtil && min < ABRE) {
      return { estado: 'fechado', texto: 'Fechado agora · abre hoje às 5h45' };
    }
    do {
      proximo.setDate(proximo.getDate() + 1);
    } while (proximo.getDay() === 0);

    var ehAmanha = proximo.getDate() === agora.getDate() + 1;
    return {
      estado: 'fechado',
      texto: ehAmanha
        ? 'Fechado agora · abre amanhã às 5h45'
        : 'Fechado · abre segunda às 5h45'
    };
  }

  var elStatus = document.getElementById('status');
  if (elStatus) {
    var atualiza = function () {
      var r = estadoDaLoja(new Date());
      elStatus.setAttribute('data-estado', r.estado);
      elStatus.querySelector('.status__txt').textContent = r.texto;
    };
    atualiza();
    setInterval(atualiza, 60000);
  }

  /* ---------------------------------------------------------------
     2. Revelar ao entrar na tela
     --------------------------------------------------------------- */
  var aRevelar = document.querySelectorAll('.reveal');

  if (semMovimento || !('IntersectionObserver' in window)) {
    aRevelar.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        // cascata curta, só entre irmãos que aparecem juntos
        setTimeout(function () { e.target.classList.add('is-in'); }, Math.min(i * 70, 350));
        obs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    aRevelar.forEach(function (el) { obs.observe(el); });
  }

  /* ---------------------------------------------------------------
     3. Parallax — só no computador
     Celular fica de fora de propósito: trava a rolagem e esquenta o aparelho.
     --------------------------------------------------------------- */
  var telaGrande = window.matchMedia('(min-width: 901px)');
  var alvos = document.querySelectorAll('[data-parallax]');
  var tickando = false;

  function moverParallax() {
    alvos.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var progresso = (window.innerHeight - r.top) / (window.innerHeight + r.height);
      // cada peça da colagem anda numa velocidade — é o que dá profundidade
      var velocidade = parseFloat(el.dataset.flut || 1);
      var deslocamento = (progresso - 0.5) * 34 * velocidade;
      el.style.transform = 'translate3d(0,' + deslocamento.toFixed(1) + 'px,0)';
    });
    tickando = false;
  }

  function aoRolar() {
    if (tickando) return;
    tickando = true;
    requestAnimationFrame(moverParallax);
  }

  function ligarParallax() {
    if (semMovimento || !telaGrande.matches || !alvos.length) {
      alvos.forEach(function (el) { el.style.transform = ''; });
      window.removeEventListener('scroll', aoRolar);
      return;
    }
    window.addEventListener('scroll', aoRolar, { passive: true });
    moverParallax();
  }

  ligarParallax();
  telaGrande.addEventListener('change', ligarParallax);

  /* ---------------------------------------------------------------
     4. Carrossel infinito (marquee)
     Duplica os itens da trilha pra o loop de -50% não ter emenda.
     A velocidade se ajusta à quantidade de itens, pra ficar constante.
     --------------------------------------------------------------- */
  document.querySelectorAll('.marquee__trilha').forEach(function (trilha) {
    var itens = [].slice.call(trilha.children);
    if (!itens.length) return;

    // clona o conjunto inteiro uma vez (a 2ª metade que fecha o loop)
    itens.forEach(function (li) {
      var c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true'); // a cópia não é lida duas vezes
      trilha.appendChild(c);
    });

    // duração proporcional ao nº de itens: ~3,4s por item, pra o ritmo não mudar
    var dur = itens.length * 3.4;
    trilha.style.setProperty('--dur', dur.toFixed(0) + 's');

    if (semMovimento) trilha.style.animation = 'none';
  });

  /* ---------------------------------------------------------------
     5. Palavra que gira na abertura
     Efeito do "animated hero": a palavra sobe, sai por cima, a próxima
     entra por baixo. A caixa acompanha a largura pra não abrir buraco.
     --------------------------------------------------------------- */
  var caixa = document.getElementById('gira');

  if (caixa && !semMovimento) {
    var palavras = [].slice.call(caixa.querySelectorAll('.gira__p'));
    var atual = 0;

    var largura = function (el) {
      // mede a palavra sem o overflow da caixa atrapalhar
      var m = el.cloneNode(true);
      m.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap';
      caixa.parentNode.appendChild(m);
      var w = m.getBoundingClientRect().width;
      m.remove();
      return w;
    };

    var ajusta = function () { caixa.style.setProperty('--w', Math.ceil(largura(palavras[atual])) + 'px'); };

    var passa = function () {
      var sai = palavras[atual];
      atual = (atual + 1) % palavras.length;
      var entra = palavras[atual];

      ajusta();
      sai.classList.remove('is-on');
      sai.classList.add('is-out');
      entra.classList.remove('is-out');
      // força o reflow pra o translate inicial valer antes da transição
      void entra.offsetWidth;
      entra.classList.add('is-on');

      setTimeout(function () { sai.classList.remove('is-out'); }, 600);
    };

    // espera as fontes carregarem, senão mede com a fonte errada
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
      ajusta();
      setInterval(passa, 2400);
    });
    window.addEventListener('resize', ajusta);
  } else if (caixa) {
    // sem movimento: mostra só a primeira e deixa a caixa do tamanho dela
    caixa.style.setProperty('--w', 'auto');
  }

  /* ---------------------------------------------------------------
     6. Menu do celular
     --------------------------------------------------------------- */
  var botao = document.querySelector('.topo__menu');
  var menu = document.getElementById('navmob');

  if (botao && menu) {
    botao.addEventListener('click', function () {
      var aberto = menu.hasAttribute('data-open');
      if (aberto) {
        menu.removeAttribute('data-open');
        menu.hidden = true;
      } else {
        menu.setAttribute('data-open', '');
        menu.hidden = false;
      }
      botao.setAttribute('aria-expanded', aberto ? 'false' : 'true');
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.removeAttribute('data-open');
        menu.hidden = true;
        botao.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------------
     7. Ano do rodapé
     --------------------------------------------------------------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
