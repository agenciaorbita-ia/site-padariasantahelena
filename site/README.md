# Site — Padaria Santa Helena

Primeira versão, montada em 22/07/2026. HTML, CSS e JS puros — sem build, sem
framework, sem dependência. Abre direto no navegador.

## Como rodar

```bash
cd site
npx http-server -p 8912 -c-1
# http://localhost:8912
```

Ou só abrir o `index.html` no navegador (o mapa e as fontes precisam de internet).

## Arquivos

```
site/
├── index.html          página única
├── css/estilo.css      todo o estilo
├── js/site.js          comportamento, sem biblioteca
└── img/
    ├── marca/          logo transparente, escura e clara
    ├── produtos/       recortados das artes do Instagram
    ├── loja/           fachada, balcão, prateleiras
    ├── historico/      acervo antigo
    └── equipe/         panificadores, Valdister e Flávio
```

**Peso total: 1,7 MB.** Fotos em JPEG; PNG só na logo, que precisa de
transparência.

## As oito seções

Seguem a [ESTRUTURA.md](ESTRUTURA.md).

1. **Abertura** — colagem de três produtos flutuando, carimbo circular giratório,
   selo de aberto/fechado com a luz pulsando, nota do Google
2. **Catálogo** — 14 itens com filtro por categoria, sem preço
3. **Encomendas** — WhatsApp com mensagem pronta
4. **História** — a foto da fila + o painel escuro do casal fundador + linha do tempo
5. **Quem faz** — Valdister e Flávio em destaque + os oito retratos
6. **Avaliações** — 4,9 de 771, com seis depoimentos reais
7. **Temporada** — espaço reservado pra campanha da época
8. **Onde e quando** — endereço, horário, mapa, WhatsApp

## As animações

Tudo em CSS + `IntersectionObserver`. Sem GSAP, sem biblioteca.

| Onde | O quê |
| --- | --- |
| **Título da abertura** | **Palavra que gira** — "Tem fila na porta pelo *pão / pão de queijo / bolo de fubá / café da tarde / croissant*". A palavra sobe e sai por cima, a próxima entra por baixo, e a caixa acompanha a largura pra não abrir buraco |
| **Cards do catálogo** | **Borda de gradiente girando** — cônico de âmbar → trigo → marrom dando a volta na borda ao passar o mouse. Os cards sem foto giram sozinhos, mais devagar |
| Abertura | Entrada em cascata (`--d` por elemento, 0 a 820 ms) |
| Colagem | As três fotos flutuam em durações diferentes (7s, 8,5s, 10s) e têm parallax em velocidades diferentes — a do meio anda ao contrário, o que dá profundidade |
| Carimbo | Texto circular girando em 26s, com a espiga parada no miolo |
| Espigas de fundo | Balançam devagar, em fases diferentes |
| Selo "aberto" | **Duas ondas verdes pulsando**, defasadas em 1,1s. Só quando está aberto |
| Cards | Sobem e giram meio grau (alternando o lado), a foto dá zoom, um **brilho dourado atravessa** a imagem e um filete cresce sob o nome |
| Casal fundador | Zoom leve na foto ao passar o mouse |
| Seta de rolar | Pontinho descendo em loop |

| **Cards de encomenda** | Deslizam pra direita no hover, com filete dourado correndo pela borda de baixo e o nome abrindo o espaçamento |
| **Cards de avaliação** | Sobem e crescem de leve, com aspa gigante girando no canto |
| **Fundo das avaliações** | Duas manchas de luz vagando devagar atrás dos depoimentos |
| **Acervo antigo** | As duas fotos sobem e dão zoom no hover |
| **Curva entre seções** | Onda separando toda seção da anterior, na cor de quem chega |

Tudo respeita `prefers-reduced-motion`.

## Auditoria responsiva + logo (5ª leva, 22/07/2026)

Rodei o `/responsive-design` medindo em 320, 360, 390, 414, 600, 768, 1024,
1280, 1440px — no navegador de verdade, não no papel.

Achados e correções:

- **Botão do menu hambúrguer era 40×32** (abaixo de 44×44). Agora é 44×44 cheio
- **O WhatsApp do topo sumia no mobile sem substituto** — o CTA principal ficava
  inacessível. Adicionado "Chamar no WhatsApp" no fim do menu do celular
- **Tags decorativas em 11px** (etiqueta "Antes", "32 anos", "771 avaliações")
  subiram pra ≥12px
- Confirmado: **sem `100vh`** (o bug clássico de altura no mobile), sem largura
  fixa que estoure (todas são media query ou `max-width`), sem overflow
  horizontal em nenhuma largura, todos os alvos ≥44px

**Logo nova + tamanho.** Chegaram versões com recorte mais justo
(`dados/logo/*-v2.png`). O problema de "logo pequena no header" é a forma dela:
empilhada (DESDE 1968 / espiga / Santa Helena / PADARIA), então limitar a altura
encolhe o nome. Solução: logo 68–84px **com margem negativa no `.topo__marca`**,
pra ela sangrar um pouco e ficar legível **sem inchar o header** (segue ~77px no
desktop, 61px no mobile).

## Ajustes da rodada de 22/07/2026 (4ª leva)

- **Header reequilibrado**: 111px era demais. Logo pra 56–66px, header em ~77px
- **Corrigido bug do status**: ao remover a seta de rolar (3ª leva), o script
  deixou o corpo das regras `.desce` órfão no CSS, o que quebrou o parsing e
  derrubou o estilo do `.status` logo abaixo — a cápsula branca com bolinha
  verde virou texto solto. Removidas as linhas órfãs; o badge voltou
- **Removida a faixa de avaliações rolando** (o marquee de depoimentos do
  Google da 3ª leva). A grade de 6 avaliações continua
- Lição: nunca filtrar linhas de CSS por prefixo de seletor via script — remove
  o seletor e deixa o corpo. Editar o bloco inteiro à mão

## Ajustes da rodada de 22/07/2026 (3ª leva)

- **Logo do cabeçalho** de novo maior: 72–96px (era 52–68)
- **Seta de rolar removida** do hero (HTML + CSS)
- **Catálogo virou carrossel infinito** (`marquee`): os 14 cards rolam em loop
  sem emenda, ~4-5 visíveis, pausam no hover, pontas esmaecidas. A trilha é
  duplicada no JS; a animação anda -50%. Os filtros de categoria saíram — não
  fazem sentido num carrossel automático
- **Encomendas com foto de fundo**: cada card (Bolos, Salgados, Tortas, Pães)
  tem a foto do produto ao fundo, com véu marrom degradê da esquerda pro texto
  aparecer. Zoom na foto no hover. A imagem vem por `--bg` inline; caminho
  `../img/` porque URL em custom property resolve relativa ao CSS
- **Avaliações**: mantida a grade de 6 + adicionada **faixa marquee** com mais 5
  avaliações rolando (Ernani, Anderson, Jéssica, etc.)
- **Fundo das avaliações corrigido**: a mancha de luz clara encostava na borda
  superior e revelava a linha da curva. Agora começa abaixo da onda e é mais
  suave
- **Auditoria completa** (3ª vez): 0 falhas de contraste, 0 alvos <44px, 0 sem
  alt, sem overflow, 1 H1, hierarquia correta — desktop e mobile

## Ajustes da rodada de 22/07/2026 (2ª leva)

- **Favicon próprio** — `img/marca/favicon.svg`: selo circular marrom com a
  espiga dourada. O antigo era o PNG largo da logo, que encolhia demais
- **Logo do cabeçalho** de 46px pra 52–68px (fluido)
- **Curva entre todas as seções** — antes só o rodapé tinha. Cada seção desenha
  a onda no topo, com a cor dela, cobrindo a de cima. Precisa de `:has()`; sem
  ele, a folga vem pela classe `.sec--curva`
- **Encomendas**: cards animados + o botão ganhou `margin-top` (estava colado)
- **História**: a foto única virou **duas fotos lado a lado, menores** (o acervo
  é de baixa resolução; grande, a granulação aparece demais)
- **Avaliações**: nomes com inicial maiúscula (Geraldo Newton, Saulo C., Caique
  Silva, Alexandre M.), cards animados e fundo com movimento
- **Temporada**: `margin-top` no botão, mesmo problema das encomendas

## O que o JS faz

| # | O quê |
| --- | --- |
| 1 | **Aberto agora** — lê o relógio do visitante. Seg–sáb 5h45–20h, domingo fechado. Mostra "fecha em X min" na última hora e "abre amanhã/segunda" quando fechado. Atualiza a cada minuto |
| 2 | **Revelar ao rolar** — cascata curta, no máximo 350 ms |
| 3 | **Parallax** — só acima de 900 px. Desligado no celular de propósito. Velocidade por elemento via `data-flut` |
| 4 | **Filtro do catálogo** |
| 5 | **Menu do celular** |

## As duas features do 21st.dev

Pedidas em 22/07/2026: [animated-hero](https://21st.dev/@tommyjepsen/components/animated-hero)
e [animated-gradient-border](https://21st.dev/@easemize/components/animated-gradient-border).

**Os dois originais são React + framer-motion + Tailwind + shadcn.** Este site é
HTML/CSS/JS puro, sem build. Instalar React aqui custaria ~40 KB de JavaScript
num site aberto no 4G, na rua — então os efeitos foram **refeitos nativamente**.

| | Original | Aqui |
| --- | --- | --- |
| Palavra girando | framer-motion `AnimatePresence` + spring | `translate` + `transition` com curva elástica; largura da caixa medida em JS e animada |
| Borda em gradiente | componente React com props | `@property --anel` + `conic-gradient` + camada `.card__in` por cima recortando o anel |

**Peso da implementação: 0 KB de biblioteca.** ~40 linhas de CSS e ~35 de JS.

Detalhes que valem lembrar:

- A palavra que gira tem a lista completa lida por leitor de tela (`.sr`), e a
  parte animada é `aria-hidden` — senão o leitor repetiria a frase a cada 2,4s
- A medição da largura espera `document.fonts.ready`. Sem isso ela media com a
  fonte de reserva e a caixa ficava do tamanho errado
- O `--anel` do CSS não tem relação com o `id="volta"` do SVG do carimbo —
  foram renomeados justamente pra não confundir
- **Os cards sem foto giram sozinhos** (6s) e aceleram no hover (3s). Foi
  escolha: fazer os 14 cards girarem ao mesmo tempo viraria circo e gastaria
  bateria. Girar só os que faltam foto puxa o olho pro que o cliente precisa ver

## Decisões que valem lembrar

**Antes/depois removido.** A resolução do acervo não aguentava a comparação lado a lado — a foto da fila ficou sozinha, em largura cheia, que é onde ela é forte.

**Fonte manuscrita: Yellowtail, não Telma.** A pesquisa recomendou a Telma
(Fontshare), mas na hora de implementar a API da Fontshare devolveu
`Access to the Fontshare API has been temporarily restricted` — a fonte não
carrega. A Yellowtail era o plano B documentado em
[FONTES.md](../identidade-visual/FONTES.md) e está no Google Fonts. Se a
Fontshare voltar, trocar é mudar uma linha no `:root`.

**Cores medidas na logo**, não as do briefing. Ver
[identidade-visual/README.md](../identidade-visual/README.md).

**Sem preço no catálogo.** Muito produto é vendido por quilo.

**Os produtos foram recortados das artes do Instagram** com `ffmpeg`, pra tirar
o texto queimado nas peças. São recortes, não fotos originais — resolvem
enquanto a sessão de fotos não acontece.

## Os lugares reservados

Quatro cards do catálogo e o bloco da temporada estão com **moldura tracejada
dourada**, dizendo qual foto falta. Isso é de propósito: o site funciona e ao
mesmo tempo mostra o buraco.

| Onde | O que falta |
| --- | --- |
| Catálogo | Pão de sal, broa, biscoito de polvilho, bola de pão de queijo |
| Temporada | Foto e chamada da campanha do momento |

Lista completa em [../saidas/lista-de-fotos.md](../saidas/lista-de-fotos.md).

## Pendente

- [ ] **Fotos em alta** — a única coisa realmente bloqueante
- [ ] Nome dos nove panificadores (hoje os retratos estão sem legenda)
- [ ] Autorização de uso de imagem
- [ ] Regras de encomenda: prazo, sinal, tamanhos
- [ ] Vídeo da homenagem dos 32 anos na seção "Quem faz"
- [ ] Domínio e hospedagem
- [ ] Auto-hospedar as fontes (hoje vêm do Google, o que adiciona uma
      dependência externa)
- [ ] Favicon próprio — hoje usa o PNG da logo, que tem proporção larga demais
- [ ] **Extrair o design system** do `estilo.css` (adiado em 22/07/2026)

## Sobre o design system

O `estilo.css` já funciona como design system informal: as quatro cores medidas
na logo estão em `:root`, e há componentes reais — `.btn` (4 variantes), `.card`,
`.sec` (3 fundos), `.filtro`, `.status`, `.pc`, `.carimbo`, a onda do rodapé e os
slots tracejados. Só que está tudo num arquivo só, amarrado a esta página.

**Checado em 22/07/2026:** o `/design-sync` (sincronizar com claude.ai/design)
**não roda neste projeto**. Ele converte biblioteca de componentes compilada —
`package.json`, build, `dist/`, React ou Storybook. Aqui é HTML + CSS + JS puro,
e não existe `package.json` de biblioteca nem Storybook em nenhum lugar do
workspace. Não há o que empacotar.

Pra sincronizar um dia, o pré-requisito é virar biblioteca compilada. O passo
intermediário barato é separar `tokens.css` + `componentes.css` + um
`catalogo.html`, que já serve pra reuso e handoff mesmo sem sync.
