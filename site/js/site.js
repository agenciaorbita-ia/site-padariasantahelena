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
     4. Filtro do catálogo
     --------------------------------------------------------------- */
  var filtros = document.querySelectorAll('.filtro');
  var cards = document.querySelectorAll('#grade .card');

  filtros.forEach(function (b) {
    b.addEventListener('click', function () {
      var alvo = b.dataset.f;

      filtros.forEach(function (o) {
        var ativo = o === b;
        o.classList.toggle('is-on', ativo);
        o.setAttribute('aria-selected', ativo ? 'true' : 'false');
      });

      cards.forEach(function (c) {
        var mostra = alvo === 'todos' || c.dataset.cat === alvo;
        c.hidden = !mostra;
      });
    });
  });

  /* ---------------------------------------------------------------
     5. Menu do celular
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
