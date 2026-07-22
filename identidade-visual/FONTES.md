# Fontes do site — Padaria Santa Helena

> Pesquisa feita em 22/07/2026. Cobre os três papéis de tipografia do site:
> manuscrita (assinatura), título e corpo. Todas as fontes propostas foram
> verificadas uma a uma — cobertura de acentos, pesos, licença e tamanho de
> arquivo.

## O sistema que a marca já tem

Não estou inventando nada. A logo e o Instagram já definiram três papéis:

| Papel | O que a marca usa hoje | Onde aparece |
| --- | --- | --- |
| **A — Manuscrita** | Script inclinada, traço grosso, retrô, monolinear com alguma modulação | "Santa Helena" na logo; uma palavra destacada dentro do título dos posts |
| **B — Título** | Duas direções convivem: **(b1)** sans geométrica pesada e **(b2)** serifada de alto contraste (didone) | Headline dos posts ("Sobremesas *saborosas* toda **hora!**", "Esfihas"); placa "Pães de Sal" em dourado |
| **B′ — Rótulo** | Caixa alta fina com tracking largo | "PADARIA", "DESDE 1968" |
| **C — Corpo** | Ainda não existe | O site precisa criar |

A regra que já está no [README](README.md) vale aqui: **a manuscrita é
assinatura, não fonte de texto.** Ela entra na logo, no nome da casa e, no
máximo, numa palavra por título. Nunca em parágrafo, nunca em botão, nunca em
menu.

Detalhe importante: o rótulo (B′) não precisa de uma quarta fonte. É o peso
mais fino da mesma família do título, em caixa alta com `letter-spacing`. Menos
uma fonte pra carregar.

---

## Como verifiquei

Para não recomendar fonte que quebra em português, cada família do Google Fonts
foi checada contra a lista de codepoints que o pt-BR usa
(`á à â ã é ê í ó ô õ ú ü ç` + maiúsculas + `º ª`), lendo a cobertura real
publicada pelo Google (`fonts.google.com/metadata/fonts/<Família>`). Todas as
famílias listadas abaixo passaram com **zero glifos faltando**.

Vale o registro técnico: o subset `latin` do Google Fonts já cobre
`U+0000–00FF`, ou seja, todo o Latin-1 — que é onde moram `ã õ ç á ê`.
**Português não precisa de `latin-ext`.** O `latin-ext` serve pra polonês,
tcheco, húngaro. Isso significa que dá pra carregar menos bytes do que a
maioria dos tutoriais manda.

As fontes do Fontshare foram checadas na API da fundição
(`api.fontshare.com/v2/fonts`), que lista Portuguese explicitamente na
cobertura de idiomas de cada família, e depois testadas renderizando
"pães ação ÇÃO" no navegador.

Os tamanhos em KB são do arquivo `.woff2` real, subset `latin`, baixado na hora.

Amostra renderizada das candidatas (Telma, Britney, Clash Display, Zodiak,
Satoshi e outras, escrevendo "Santa Helena — pães ação"):
[amostras-fontes.png](amostras-fontes.png).

---

## Papel A — Manuscrita (só display)

Requisito: inclinada, traço **grosso**, ar de assinatura retrô. Nada de
caligrafia fina de convite de casamento.

### Gratuitas

| Fonte | Fundição / origem | Licença | Google Fonts? | Acentos pt-BR | Pesos | Peso do arquivo | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Telma** | Indian Type Foundry (Fontshare) | ITF Free Font License | Não | ✅ (PT listado na API) | Variável 300–900 (6 estilos) | 32 KB (700) | **A mais próxima da logo.** Grossa, inclinada, ligada, com modulação e swash no "l" e no "e". Ter 300–900 permite calibrar a espessura até bater com o original |
| **Yellowtail** | Astigmatic (Google) | Apache 2.0 | ✅ | ✅ | 400 | **17 KB** | Pincel modulado, inclinado, elegante. Cara de placa antiga. Mais discreta que a logo, mas nunca briga com ela |
| **Pacifico** | Vernon Adams (Google) | OFL 1.1 | ✅ | ✅ | 400 | 31 KB | Grossa, monolinear, retrô surf. Bate com a descrição, mas é a script mais usada da web (~33 milhões de requisições/dia). Genérica |
| **Kaushan Script** | Impallari Type (Google) | OFL 1.1 | ✅ | ✅ | 400 | 33 KB | Pincel seco, inclinação forte. Mais "rústica" que a marca |
| **Courgette** | Karolina Lach (Google) | OFL 1.1 | ✅ | ✅ | 400 | 24 KB | Média-grossa, simpática, arredondada. Menos assinatura, mais bilhete |
| **Damion** | Neapolitan (Google) | OFL 1.1 | ✅ | ✅ | 400 | ~22 KB | Inclinada e fluida, porém fina demais em títulos grandes |
| **Grand Hotel** | Astigmatic (Google) | OFL 1.1 | ✅ | ✅ | 400 | ~24 KB | Letreiro retrô fino. Bonita, mas contraria o "traço grosso" |
| **Merienda** | Eduardo Tunni (Google) | OFL 1.1 | ✅ | ✅ | Variável 300–900 | 50 KB | Semi-script pesada, quase reta. Boa se o cliente quiser algo menos cursivo |

**Descartadas por serem finas demais** (o briefing pede o contrário): Pencerio,
Rosaline, Sacramento, Great Vibes, Alex Brush, Allura, Norican.

Nota sobre **Lobster Two Bold Italic**: bate visualmente, mas o pacote do Google
só traz o subset `latin` — o que ainda cobre português — e a fonte tem cara
de "meme de 2012". Não recomendo pela associação, não pela técnica.

### Pagas (comparação)

| Fonte | Fundição | Preço | Observação |
| --- | --- | --- | --- |
| **Thirsty Script** | Yellow Design Studio | a partir de **US$ 20/estilo**, ~US$ 89 o pacote (MyFonts / Fontspring) | Script de letreiro vintage com 6 pesos, do Light ao Black. Feita exatamente pra esse tipo de marca |
| **Bakerie** | Adam Ladd | **fora de catálogo** (MyFonts marca como "no longer available") | Era a referência do segmento — 42 fontes com versão rough. Registro pra evitar perder tempo procurando |

> A paga não compra nada aqui que a Telma não entregue. Só considerar se o
> cliente quiser exclusividade visual.

### Recomendação do papel A

**Telma 700 (Fontshare, grátis).** É a única gratuita que junta as três
coisas: grossa, inclinada e com faixa de peso pra ajustar. Plano B sem sair do
Google Fonts: **Yellowtail** — 17 KB, o menor arquivo da lista inteira.

⚠️ Antes de fechar: a Telma tem laçada no "l" e cauda no "e" final. Comparar
lado a lado com a logo em tamanho grande. Se o cliente achar que "não é a
mesma letra", Yellowtail é mais neutra e some melhor ao lado da logo real.

---

## Papel B1 — Título: sans geométrica / grotesca pesada

Requisito: peso alto pra headline, e um peso fino da **mesma** família pra
fazer o rótulo em caixa alta espaçada ("PADARIA", "DESDE 1968").

| Fonte | Fundição / origem | Licença | Google Fonts? | Acentos pt-BR | Pesos | Peso do arquivo | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Jost** | indestructible type* (Google) | OFL 1.1 | ✅ | ✅ | Variável 100–900 + itálicos | 27 KB (200–800) | Geométrica tipo Futura. **O 200 em caixa alta com tracking largo é praticamente o "PADARIA" da logo.** Uma família resolve título e rótulo |
| **Clash Display** | Indian Type Foundry (Fontshare) | ITF Free Font License | Não | ✅ | 200–700 (7 estilos + variável) | 14,5 KB (700) | Grotesca larga e pesada, com muita personalidade. A mais parecida com o que eles usam no Instagram |
| **Archivo** | Omnibus-Type (Google) | OFL 1.1 | ✅ | ✅ | Variável 100–900, eixo de largura 62–125 | 34 KB (400–800) | Grotesca americana com eixo de largura. Ótima pra condensar título grande no mobile |
| **Montserrat** | Julieta Ulanovsky (Google) | OFL 1.1 | ✅ | ✅ | Variável 100–900 + itálicos | 37 KB | Geométrica segura e onipresente. Funciona, mas não diferencia |
| **Poppins** | Indian Type Foundry (Google) | OFL 1.1 | ✅ | ✅ | 100–900 + itálicos | ~35 KB | Geométrica pura de círculo perfeito. Muito usada em delivery — cuidado com a associação de fast-food |
| **Figtree** | Erik Kennedy (Google) | OFL 1.1 | ✅ | ✅ | Variável 300–900 | **19 KB** | Geométrica-humanista quente. Serve nos dois papéis (título e corpo) se o orçamento de fonte for apertado |

**Paga:** Brandon Grotesque (HVD Fonts) — a partir de **US$ 40/estilo**,
**US$ 249** a família completa (12 estilos). É a geométrica que quase toda
padaria premium europeia usa. Jost entrega 85% disso de graça.

### Recomendação do papel B1

**Jost** — resolve título pesado (700/800) **e** rótulo fino (200 em caixa alta
com `letter-spacing: .18em`) num arquivo variável de 27 KB. Se quiser algo mais
autoral e não se importar em auto-hospedar: **Clash Display 700**.

---

## Papel B2 — Título: serifada de alto contraste

Requisito: modulação forte grosso/fino, cara de didone. É a direção que eles
já usam em "Esfihas" e na placa "Pães de Sal".

| Fonte | Fundição / origem | Licença | Google Fonts? | Acentos pt-BR | Pesos | Peso do arquivo | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Playfair Display** | Claus Eggers Sørensen (Google) | OFL 1.1 | ✅ | ✅ | Variável 400–900 + itálicos | 37 KB (400–900) | Transicional-didone. Herança sem esforço. Muito usada, mas é um clássico honesto |
| **Bodoni Moda** | indestructible type* (Google) | OFL 1.1 | ✅ | ✅ | Variável 400–900, **eixo óptico 6–96** | 45 KB | Didone de verdade. O eixo óptico deixa o contraste fino no título grande e engrossa no pequeno — exatamente o que didone precisa pra não sumir |
| **Prata** | Cyreal (Google) | OFL 1.1 | ✅ | ✅ | 400 apenas | **18 KB** | Didone leve e caríssima de aparência. Um peso só — só serve pra título, nunca pro sistema todo |
| **Fraunces** | Undercase Type (Google) | OFL 1.1 | ✅ | ✅ | Variável 100–900 + eixos `SOFT` e `WONK` | 65 KB | Serifada "old-style peculiar". Muito boa pra comida artesanal — o eixo `WONK` dá a irregularidade de letreiro pintado. Arquivo pesado |
| **Instrument Serif** | Rodrigo Fuenzalida (Google) | OFL 1.1 | ✅ | ✅ | 400 + itálico | 20 KB | Display de contraste alto e ar editorial. Um peso só |
| **Zodiak** | Indian Type Foundry (Fontshare) | ITF Free Font License | Não | ✅ | Variável 100–900 + itálicos | 21,7 KB (700) | Didone contemporânea com serifa afiada. Excelente e pouco vista |
| **Lora** | Cyreal (Google) | OFL 1.1 | ✅ | ✅ | Variável 400–700 + itálicos | 36 KB | Contraste médio, não didone. Entra se a serifada também for carregar texto longo |

**Paga:** Recoleta (Latinotype) — **US$ 29/estilo**, **US$ 129** a família
completa. Não é didone: é serifada macia anos 70, muito usada em marca de
comida. Se um dia o cliente quiser uma cara mais "produto de prateleira", é
essa.

### Recomendação do papel B2

**Bodoni Moda.** O eixo óptico é o que separa uma didone que funciona de uma
didone que some no celular. 45 KB é justo pelo que entrega.

---

## Papel C — Corpo e interface

Requisito: legível em 15–17px, acentos completos, faixa real de pesos.
Aqui não tem espaço pra personalidade — tem que sumir e deixar ler.

| Fonte | Fundição / origem | Licença | Google Fonts? | Acentos pt-BR | Pesos | Peso do arquivo | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Figtree** | Erik Kennedy (Google) | OFL 1.1 | ✅ | ✅ | Variável 300–900 + itálicos | **19 KB** | Geométrica-humanista, quente, x-height alto. Menor arquivo com faixa completa de peso. Combina com marrom/creme sem esfriar a página |
| **Source Sans 3** | Adobe (Google) | OFL 1.1 | ✅ | ✅ | Variável 200–900 + itálicos | 28 KB | Humanista feita pra tela pequena. A mais segura da lista — zero risco de leitura |
| **Karla** | Jonny Pinhorn (Google) | OFL 1.1 | ✅ | ✅ | Variável 200–800 + itálicos | 31 KB | Grotesca com quinas levemente estranhas. Dá caráter sem atrapalhar |
| **Archivo** | Omnibus-Type (Google) | OFL 1.1 | ✅ | ✅ | Variável 100–900, largura 62–125 | 34 KB | Feita pra texto de alto contraste em tela. Aguenta corpo e título |
| **Inter** | Rasmus Andersson (Google) | OFL 1.1 | ✅ | ✅ | Variável 100–900, eixo óptico 14–32 | 47 KB | A mais legível de todas em UI. Também a mais fria — cara de app, não de padaria |
| **Satoshi** | Indian Type Foundry (Fontshare) | ITF Free Font License | Não | ✅ | 300–900 (variável) | 25,5 KB (400) | Neogrotesca limpa e moderna. Alternativa direta ao Inter, com um pouco mais de calor |
| **Lora** | Cyreal (Google) | OFL 1.1 | ✅ | ✅ | Variável 400–700 + itálicos | 36 KB | Se o corpo for serifado (página de história da casa, por exemplo) |

**Paga:** Sofia Pro (Mostardesign) — a partir de **€ 12,03/estilo**,
**€ 216,71** a família completa (18 estilos). Geométrica quente, muito boa. Não
compensa pra este projeto.

### Recomendação do papel C

**Figtree.** 19 KB, 300–900 num arquivo só, humanista o bastante pra não
gelar a marca e legível o bastante pra cardápio no celular. Se o cliente
reclamar de leitura em algum ponto, trocar por **Source Sans 3** sem mexer em
mais nada.

---

## Três sistemas completos

Todos usam a mesma escala-base de 16px e o mesmo par de contraste do
[README](README.md) (marrom `#492E25` sobre creme `#FFF2E2`, 11,2:1).

### Sistema 1 — Tradição

**Yellowtail + Playfair Display + Source Sans 3**

O que comunica: casa antiga, confiável, sem susto. É o sistema que um cliente
de 60 anos que compra pão todo dia reconhece como "a padaria". Zero risco.
Todas as três no Google Fonts — instala em cinco minutos.

| Papel | Fonte | Peso | Uso |
| --- | --- | --- | --- |
| Assinatura | Yellowtail | 400 | Nome da casa, uma palavra por headline |
| Título | Playfair Display | 700 | h1, h2 |
| Rótulo | Playfair Display | 500, versalete simulado por caixa alta + tracking | "DESDE 1968", seções |
| Corpo | Source Sans 3 | 400 / 600 | Texto, menu, botão |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Yellowtail&family=Playfair+Display:wght@500;700&family=Source+Sans+3:wght@400;600&display=swap">
```

```css
:root {
  --f-script: 'Yellowtail', cursive;
  --f-titulo: 'Playfair Display', Georgia, serif;
  --f-corpo:  'Source Sans 3', system-ui, sans-serif;
}
```

| Nível | Mobile | Desktop | Fonte / peso | Entrelinha | Tracking |
| --- | --- | --- | --- | --- | --- |
| Assinatura (hero) | 3rem | 4.5rem | Yellowtail 400 | 1.1 | 0 |
| h1 | 2rem | 3rem | Playfair 700 | 1.15 | −0.01em |
| h2 | 1.5rem | 2rem | Playfair 700 | 1.2 | 0 |
| h3 | 1.25rem | 1.375rem | Playfair 500 | 1.3 | 0 |
| Corpo | 1.0625rem | 1.125rem | Source Sans 3 400 | 1.6 | 0 |
| Rótulo / caps | 0.75rem | 0.8125rem | Source Sans 3 600 | 1.4 | 0.16em |
| Pequeno | 0.875rem | 0.875rem | Source Sans 3 400 | 1.5 | 0 |

**Orçamento de fonte: ~82 KB** (17 + 37 + 28).

---

### Sistema 2 — Calor moderno  ⭐ recomendado

**Telma + Jost + Figtree**

O que comunica: padaria de 1968 que está viva em 2026. É o que o Instagram
deles já faz — script grossa contra sans geométrica pesada — só que arrumado.
O Jost em 200 caixa alta reproduz o "PADARIA" da logo sem precisar de uma
quarta fonte.

| Papel | Fonte | Peso | Uso |
| --- | --- | --- | --- |
| Assinatura | Telma | 700 | Nome da casa, uma palavra por headline |
| Título | Jost | 700 / 800 | h1, h2 |
| Rótulo | Jost | 200 caixa alta, tracking 0.18em | "DESDE 1968", "PADARIA", seções |
| Corpo | Figtree | 400 / 600 | Texto, menu, botão |

```html
<!-- Telma: Fontshare (recomendo baixar e auto-hospedar, ver abaixo) -->
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f%5B%5D=telma@700&display=swap">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@200;700;800&family=Figtree:wght@400;600&display=swap">
```

Versão auto-hospedada da Telma (o `.woff2` sai de `cdn.fontshare.com`, é
redistribuível dentro do site pela ITF Free Font License):

```css
@font-face {
  font-family: 'Telma';
  src: url('/fontes/telma-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+2018-201D, U+2013-2014; /* pt-BR + aspas + travessão */
}
```

```css
:root {
  --f-script: 'Telma', cursive;
  --f-titulo: 'Jost', system-ui, sans-serif;
  --f-corpo:  'Figtree', system-ui, sans-serif;
}
.rotulo {
  font-family: var(--f-titulo);
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: .18em;
}
```

| Nível | Mobile | Desktop | Fonte / peso | Entrelinha | Tracking |
| --- | --- | --- | --- | --- | --- |
| Assinatura (hero) | 2.75rem | 4.25rem | Telma 700 | 1.15 | 0 |
| h1 | 2.125rem | 3.25rem | Jost 800 | 1.1 | −0.02em |
| h2 | 1.625rem | 2.25rem | Jost 700 | 1.2 | −0.01em |
| h3 | 1.25rem | 1.5rem | Jost 700 | 1.3 | 0 |
| Corpo | 1.0625rem | 1.125rem | Figtree 400 | 1.65 | 0 |
| Rótulo / caps | 0.75rem | 0.8125rem | Jost 200 | 1.4 | 0.18em |
| Pequeno | 0.875rem | 0.875rem | Figtree 400 | 1.5 | 0 |

**Orçamento de fonte: ~78 KB** (32 + 27 + 19).

---

### Sistema 3 — Editorial premium

**Britney + Bodoni Moda + Archivo**

O que comunica: vitrine de confeitaria, bolo de encomenda, foto grande com
muito respiro. É o sistema que sustenta preço mais alto e a linha de
encomendas do fim de semana. Também o mais fácil de errar — exige foto boa e
espaço em branco de verdade.

| Papel | Fonte | Peso | Uso |
| --- | --- | --- | --- |
| Assinatura | Britney | 700 | Nome da casa, palavra destacada |
| Título | Bodoni Moda | 500 / 700 (com eixo óptico) | h1, h2 |
| Rótulo | Archivo 500 caixa alta, tracking 0.2em | — | "DESDE 1968", seções |
| Corpo | Archivo | 400 / 600 | Texto, menu, botão |

```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f%5B%5D=britney@700&display=swap">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500;6..96,700&family=Archivo:wght@400;500;600&display=swap">
```

```css
:root {
  --f-script: 'Britney', cursive;
  --f-titulo: 'Bodoni Moda', 'Playfair Display', Georgia, serif;
  --f-corpo:  'Archivo', system-ui, sans-serif;
}
h1 { font-family: var(--f-titulo); font-variation-settings: 'opsz' 72; }
h3 { font-family: var(--f-titulo); font-variation-settings: 'opsz' 16; }
```

| Nível | Mobile | Desktop | Fonte / peso | Entrelinha | Tracking |
| --- | --- | --- | --- | --- | --- |
| Assinatura (hero) | 2.5rem | 3.75rem | Britney 700 | 1.15 | 0 |
| h1 | 2.25rem | 3.75rem | Bodoni Moda 700, `opsz 72` | 1.05 | −0.02em |
| h2 | 1.625rem | 2.5rem | Bodoni Moda 500, `opsz 48` | 1.15 | −0.01em |
| h3 | 1.1875rem | 1.375rem | Bodoni Moda 700, `opsz 16` | 1.3 | 0 |
| Corpo | 1rem | 1.0625rem | Archivo 400 | 1.7 | 0 |
| Rótulo / caps | 0.75rem | 0.75rem | Archivo 500 | 1.4 | 0.2em |
| Pequeno | 0.8125rem | 0.875rem | Archivo 400 | 1.55 | 0 |

**Orçamento de fonte: ~105 KB** (26 + 45 + 34). O mais pesado dos três.

---

## Comparação rápida

| | Sistema 1 — Tradição | Sistema 2 — Calor moderno | Sistema 3 — Editorial |
| --- | --- | --- | --- |
| Script | Yellowtail | **Telma** | Britney |
| Título | Playfair Display | **Jost** | Bodoni Moda |
| Corpo | Source Sans 3 | **Figtree** | Archivo |
| Tudo no Google Fonts? | ✅ Sim | Não (Telma é Fontshare) | Não (Britney é Fontshare) |
| Peso total | ~82 KB | ~78 KB | ~105 KB |
| Fidelidade ao Instagram atual | média | **alta** | média |
| Risco de o cliente estranhar | baixo | baixo | médio |
| Exige foto boa | não | pouco | **muito** |

---

## Armadilhas

### Manuscrita na web

1. **Nunca em texto corrido.** Script tem letra ligada e traço variável — o
   olho lê palavra por forma, e forma cursiva quebra esse mecanismo. Parágrafo
   em script derruba a velocidade de leitura e é o erro clássico de site de
   padaria.
2. **Nunca em caixa alta.** `text-transform: uppercase` numa script quebra as
   ligações e vira um monstro. Se aparecer no CSS junto de `--f-script`, é bug.
3. **Nunca com `letter-spacing`.** Mesmo motivo: separa letras que foram
   desenhadas pra encostar.
4. **Piso de tamanho: 28px.** Abaixo disso o traço fino da modulação some no
   antialiasing e o texto vira mancha. No mobile isso significa que a
   assinatura no hero tem que caber em 2,5–3rem — se não couber, corta a
   frase, não diminui a fonte.
5. **x-height baixo.** Script parece menor que uma sans do mesmo `font-size`.
   Na prática, subir 10–20% em relação ao que o número sugere.
6. **Fundo dourado + script fina = falha de contraste.** Trigo `#E1B76B` sobre
   creme dá 1,70:1. Script em dourado só sobre marrom.
7. **Acessibilidade:** leitor de tela lê normal (é texto, não imagem), mas
   usuário com dislexia sofre com cursiva. Por isso a regra "uma palavra por
   título" — e nunca informação que só existe ali (horário, endereço, preço).
8. **Não usar script pra número.** Preço, telefone e horário em script viram
   erro de pedido. Sempre na fonte de corpo, com `font-variant-numeric: tabular-nums`.

### Carregamento e tamanho de arquivo

| Prática | O que fazer |
| --- | --- |
| **Formato** | Só `woff2`. Em 2026 nenhum navegador relevante precisa de `woff` ou `ttf` — servir os dois dobra o peso à toa |
| **Subset** | Português cabe em `U+0000-00FF`. Declarar `unicode-range` e cortar `latin-ext`, cirílico e vietnamita economiza 30–50% do arquivo |
| **`font-display`** | `swap` no corpo e nos títulos (texto aparece na hora, troca depois). `optional` na script do hero — se ela não chegar em 100ms, o site mostra o fallback e não dá salto de layout |
| **`preload`** | Só a fonte que bloqueia o herói — normalmente a de título. Pré-carregar as quatro anula o benefício |
| **Variável x estática** | O ponto de virada é ~3 pesos. Menos que isso, arquivos estáticos são menores; mais que isso, o variável ganha. Os três sistemas acima usam 2–3 pesos por família de propósito |
| **Quantidade de pesos** | Máximo 2 pesos por família. Uma padaria não precisa de nove |
| **Auto-hospedar x CDN** | **Auto-hospedar.** Elimina o DNS + handshake com `fonts.gstatic.com` (200–500ms na primeira visita), e desde 2018 o cache do Google Fonts não é mais compartilhado entre sites, então o argumento de "já vai estar em cache" morreu |
| **LGPD** | Chamar o Google Fonts pela CDN envia o IP do visitante pra um servidor do Google sem consentimento. Já virou processo na Europa. Com a LGPD o risco é pequeno pra uma padaria, mas auto-hospedar resolve de graça e ainda é mais rápido |
| **Fallback** | Declarar `font-family: 'Figtree', system-ui, sans-serif` e ajustar com `size-adjust` / `ascent-override` numa `@font-face` de fallback, pra o texto não pular quando a fonte real chega |

```css
/* fallback com métrica ajustada — evita salto de layout */
@font-face {
  font-family: 'Figtree Fallback';
  src: local('Segoe UI'), local('Roboto'), local('Helvetica Neue');
  size-adjust: 97%;
  ascent-override: 94%;
  descent-override: 24%;
}
body { font-family: 'Figtree', 'Figtree Fallback', system-ui, sans-serif; }
```

### Licenças — o que checar antes de subir

| Origem | Licença | Pode auto-hospedar? | Pega? |
| --- | --- | --- | --- |
| Google Fonts (OFL 1.1) | SIL Open Font License | ✅ Sim | Não pode vender a fonte sozinha. Uso em site é livre |
| Google Fonts (Apache 2.0 — ex.: Yellowtail) | Apache 2.0 | ✅ Sim | Idem |
| Fontshare (ITF Free Font License) | ITF FFL | ✅ Sim | Grátis pra uso pessoal e comercial. Não pode redistribuir o arquivo como produto de fonte |
| MyFonts / Fontspring (pagas) | EULA por fundição | Depende | Webfont normalmente é **por domínio** e várias fundições cobram **anuidade** por faixa de pageview. Ler antes de comprar |

---

## Pendências

- [ ] Confirmar com quem desenhou a logo qual manuscrita foi usada. Se aparecer,
      é melhor licenciar a original do que buscar parecida
- [ ] Rodar o candidato escolhido lado a lado com a logo real em 2000px, pra
      conferir se o traço da script bate com o "Santa Helena" original
- [ ] Testar o cardápio inteiro em 15px no celular antes de fechar a fonte de
      corpo — nome de pão comprido ("pão de queijo assado na hora") é o caso
      difícil

---

## Fontes consultadas

Verificação técnica (dados brutos, não opinião):

- Metadados e cobertura de caracteres do Google Fonts — `https://fonts.google.com/metadata/fonts/<Família>`
- CSS e arquivos `.woff2` reais — `https://fonts.googleapis.com/css2`
- Licenças confirmadas no repositório oficial — https://github.com/google/fonts
- API do Fontshare (cobertura de idiomas, pesos, eixos) — `https://api.fontshare.com/v2/fonts`
- FAQ e licença do Fontshare — https://www.fontshare.com/faq

Prática e tendências:

- https://elements.envato.com/learn/font-trends — tendências tipográficas 2026 ("Italiano", serifadas de herança, itálicos expressivos)
- https://www.jellybeancreative.co.uk/2026/02/25/graphic-design-trends-2026/ — serifadas como sinal de herança em marcas de comida
- https://madegooddesigns.com/best-fonts-for-bakeries/ — panorama de fontes para padaria
- https://justcreative.com/bakery-fonts/ — idem
- https://looka.com/blog/font-pair/ — pares de fonte por personalidade de marca
- https://saipos.com/sistema/doceria/fontes-para-doceria — tipografia para doceria/padaria em português
- https://pt.wix.com/blog/melhores-pareamentos-fontes — pareamentos em português
- https://www.figma.com/resource-library/best-fonts-for-websites/ — fontes para site, 2025
- https://madegooddesigns.com/fontshare/ — licença e uso do Fontshare

Performance e carregamento:

- https://web.dev/articles/font-best-practices — referência do Google
- https://askseocoach.com/technical-seo/web-performance/font/ — guia 2026 de otimização
- https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/ — auto-hospedar x CDN
- https://dbushell.com/2026/02/17/web-font-choice-and-loading-strategy/ — estratégia de carregamento
- https://font-converters.com/compare/self-hosted-vs-cdn — privacidade e GDPR

Preços das opções pagas:

- https://www.myfonts.com/products/brandon-grotesque-complete-family-package-388182 — Brandon Grotesque
- https://www.myfonts.com/products/recoleta-complete-family-package-589599/ — Recoleta
- https://www.myfonts.com/products/sofia-pro-complete-family-package-1041789 — Sofia Pro
- https://www.myfonts.com/collections/thirsty-script-font-yellow-design-studio/ — Thirsty Script
- https://www.myfonts.com/collections/bakerie-font-adam-ladd — Bakerie (fora de catálogo)

Sites de padaria inspecionados no código (o que realmente usam):

| Site | Fontes encontradas |
| --- | --- |
| bourkestreetbakery.com | Ovo (serifada, Google Fonts) + Almarai |
| levainbakery.com | National 2, Platform, Pitch (todas pagas, Klim / Commercial Type) |
| balthazarny.com | Source Sans Pro + Bitter |
| benjaminabrahao.com.br | Droid Serif + Montserrat |
| saintfrankcoffee.com | Jost + Poppins |
| padariabellapaulista.com.br | Roboto |

O padrão é claro: **uma serifada ou geométrica para título + uma sans neutra
para corpo.** Nenhum deles usa script fora da logo.
