# Identidade visual — Padaria Santa Helena

> Marca do cliente. Não herda nada de `identidade-visual-mateus-alex/` da raiz.

## Paleta

Medida pixel a pixel no arquivo oficial da logo
(`dados/logo/marca-marrom-sobre-dourado-1080.jpg`), não estimada no olho.

| Cor | Hex | Onde aparece na logo | Uso |
| --- | --- | --- | --- |
| Marrom escuro | `#492E25` | "Santa Helena", "DESDE 1968", "PADARIA" | Texto, fundo escuro, a cor da marca |
| Dourado trigo | `#E1B76B` | Fundo da versão principal | Fundo quente, superfícies grandes |
| Dourado âmbar | `#CD913B` | Preenchimento do círculo do selo | Detalhe, filete, ícone, borda |
| Creme | `#FFF2E2` | Espiga e anel do selo | Texto sobre escuro, respiro |

```css
:root {
  --marrom:   #492E25; /* a cor da marca */
  --trigo:    #E1B76B; /* dourado de fundo */
  --ambar:    #CD913B; /* dourado de detalhe */
  --creme:    #FFF2E2; /* branco quente */
}
```

### ⚠️ A paleta do briefing não é a da logo

O que veio no briefing é uma aproximação. Os valores reais são **mais escuros,
mais quentes e menos saturados**:

| | Briefing | Medido na logo | Diferença |
| --- | --- | --- | --- |
| Marrom | `#624740` | `#492E25` | O real é bem mais escuro e mais avermelhado |
| Dourado | `#FABD5C` | `#E1B76B` | O real é mais suave, menos "amarelo néon" |
| Branco | `#FBFBFA` | `#FFF2E2` | O real é creme, não branco neutro |

**Recomendação: usar os valores medidos.** O `#FABD5C` do briefing é mais
berrante que a marca de verdade — puxa a padaria pra um tom de fast-food que a
loja não tem. E o branco neutro `#FBFBFA` quebra a temperatura do conjunto; o
creme `#FFF2E2` mantém tudo quente.

### Contraste — o que pode e o que não pode

Calculado em WCAG. Mínimo pra texto normal é 4,5:1.

| Combinação | Razão | Veredito |
| --- | --- | --- |
| Marrom sobre creme | **11,2:1** | ✅ Par principal de leitura |
| Creme sobre marrom | **11,2:1** | ✅ Modo escuro / rodapé |
| Marrom sobre trigo | **6,58:1** | ✅ Ótimo pra bloco destacado e botão |
| Trigo sobre marrom | **6,58:1** | ✅ Título dourado em fundo escuro |
| Âmbar sobre creme | 2,47:1 | ❌ Só filete, ícone grande ou borda |
| Trigo sobre creme | 1,70:1 | ❌ Nunca pra texto |

**Regra prática:** dourado nunca carrega texto sobre fundo claro. Dourado é
fundo, filete ou detalhe. Quem escreve é o marrom e o creme.

### Como a paleta conversa com a marca

Marrom de pão assado, dourado de casca, creme de miolo. Nada aqui é decoração —
é a cor do produto. Por isso funciona: tradição e aconchego, não modernidade
fria.

## Tipografia

[A definir]

## Logo

Chegaram duas versões, em [dados/logo/](../dados/logo/).

### Anatomia

A marca tem **quatro elementos empilhados**, e a ordem importa:

1. **Selo circular** no topo — anel creme, miolo âmbar, **espiga de trigo**
   desenhada em traço fino
2. **"DESDE"** à esquerda e **"1968"** à direita, ladeando o selo, em caixa alta
   bem espaçada. A data está na mesma linha do símbolo, não escondida no rodapé
3. **"Santa Helena"** em **manuscrita inclinada de traço grosso**, o elemento
   dominante — ocupa a largura toda
4. **"PADARIA"** embaixo, caixa alta, letra fina, espaçamento largo

O contraste entre a manuscrita gorda e as duas linhas de caixa alta magra é o
que faz a marca funcionar. **Não mexer nessa proporção.**

### Versões disponíveis

| Arquivo | O quê | Tamanho | Fundo | Serve pra |
| --- | --- | --- | --- | --- |
| **`marca-escura-transparente-500.png`** | Marrom `#492E25` + espiga âmbar | 500×500 (conteúdo 448×223) | **Transparente** | Header, fundo claro, sobre foto clara |
| **`marca-clara-transparente-500.png`** | Creme + espiga âmbar | 500×500 (conteúdo 318×165) | **Transparente** | Rodapé escuro, sobre foto escura, seção marrom |
| `marca-marrom-sobre-dourado-1080.jpg` | Sobre fundo trigo chapado | 1080×1080 | Chapado | Referência de cor |
| `avatar-dourado-sobre-marrom-150.jpg` | Avatar de perfil | 150×150 | Chapado | Nada |

### O par transparente resolve o essencial

Com as duas versões vazadas, a marca finalmente **inverte de verdade** — escura
no claro, clara no escuro. Libera:

- ✅ Header e rodapé
- ✅ Favicon
- ✅ Logo sobre foto
- ✅ Assinatura no fim de seção escura

### O que ainda falta

**São PNG de 500 px, não vetor.** O conteúdo real da versão escura é 448×223 px.
Consequências:

| Uso | Dá? |
| --- | --- |
| Header a ~200 px de largura, em tela retina | ✅ Folgado |
| Favicon | ✅ |
| Logo grande na abertura, ocupando meia tela | ⚠️ No limite, começa a amaciar |
| **Abertura animada** — selo aparece, espiga se desenha, manuscrita escreve | ❌ **Impossível** |

O último item precisa de **SVG**: a animação de traço desenha o contorno do
caminho vetorial. Em PNG não existe caminho, existe pixel — o máximo que dá é
aparecer e crescer.

- [ ] **Vetor** (`.svg`, `.ai`, `.eps` ou `.pdf`) — só pra destravar a abertura
      animada. Pro resto do site, os PNG transparentes já servem

### Ela inverte — e essa é a chave do sistema

As duas versões provam que a marca **troca de figura e fundo**: marrom sobre
dourado, dourado sobre marrom. É um sistema de inversão, não uma logo só.

Isso libera o site inteiro pra alternar seções claras e escuras sem perder a
identidade — e é exatamente o que dá ritmo numa página longa.

### A marca já mudou de cara uma vez

A fachada antiga (`dados/fotos/historico/fachada-antiga-fila.png`) usava
**"Padaria Santa Helena" em letra reta, com um logotipo em losango** — nada a
ver com a manuscrita de hoje. A identidade atual é uma reformulação, não a
original de 1968. Bom saber antes de propor qualquer mexida: já mexeram.

### Ouro ou prata?

Tem inconsistência de acabamento metálico no material que chegou:

| Aplicação | Acabamento |
| --- | --- |
| Letreiro da fachada | **Prateado / cromado** |
| Logo na camiseta branca | Dourado |
| Placa do Flávio (32 anos) | Dourado |
| Placa da Valdister (32 anos) | Prateado |
| Placa "Pães de Sal" na loja | Dourado sobre marrom |

O dourado é maioria e é o que está na paleta oficial — **o site segue o
dourado**. Mas vale avisar o cliente que a fachada destoa, caso ele queira
alinhar quando trocar o letreiro.

### A marca já mudou de cara uma vez

A fachada antiga (`dados/fotos/historico/fachada-antiga-fila.png`) usava
**"Padaria Santa Helena" em letra reta, com um logotipo em losango** — nada a
ver com a manuscrita de hoje. A identidade atual é uma reformulação, não a
original de 1968. Bom saber antes de propor qualquer mexida: já mexeram.

### Ouro ou prata?

Tem inconsistência de acabamento metálico no material que chegou:

| Aplicação | Acabamento |
| --- | --- |
| Letreiro da fachada | **Prateado / cromado** |
| Logo na camiseta branca | Dourado |
| Placa do Flávio (32 anos) | Dourado |
| Placa da Valdister (32 anos) | Prateado |
| Placa "Pães de Sal" na loja | Dourado sobre marrom |

O dourado é maioria e é o que está na paleta oficial — **o site segue o
dourado**. Mas vale avisar o cliente que a fachada destoa, caso ele queira
alinhar quando trocar o letreiro.

## Tipografia

A logo já entrega o sistema — é só respeitar:

| Papel | Estilo | Onde a marca já usa |
| --- | --- | --- |
| Nome da marca | **Manuscrita inclinada, traço grosso** | "Santa Helena" |
| Apoio / rótulo | **Caixa alta, letra fina, tracking largo** | "PADARIA", "DESDE 1968" |
| Sinalização | **Serifada** em dourado | Placa "Pães de Sal" na loja |

**A regra que sai daí:** a manuscrita é exclusiva da marca. No site ela aparece
na logo e talvez num título de abertura — nunca em texto corrido, nunca em
subtítulo. Todo o resto é caixa alta espaçada (para rótulos) e uma leitura
limpa para o corpo.

Padaria tradicional erra sempre no mesmo ponto: enche a página de manuscrita e
fica ilegível. Aqui a manuscrita é assinatura, não fonte de texto.

- [ ] Descobrir o nome das fontes originais com quem fez a logo. Se não der, dá
      pra achar equivalentes bem próximas

## Tom de voz

Mineiro, caseiro, acolhedor. Fala de padaria de bairro que virou ponto da
cidade, não de rede. Pode usar a idade da casa como orgulho ("desde 1968") sem
soar empoeirado.

Evitar: linguagem gourmetizada, "experiência sensorial", "artesanalidade".
O cliente fala "o pão de queijo é o melhorzim que tá tendo" — é esse o registro.

### Como a marca já escreve

Pelas legendas do Instagram (ver [LEGENDAS.md](../dados/fotos/LEGENDAS.md)):

- **Emoji-assinatura: 🤎✨** — o coração marrom fecha os posts. Combina com a
  paleta, provavelmente de propósito. Manter
- Frases curtas, quebradas em linhas — quase versos
- Vocabulário de **gratidão e trajetória**: "orgulho", "gratidão", "nossa
  história", "seguimos construindo todos os dias"
- Trata funcionário pelo nome e em segunda pessoa ("Você chegou jovem…")
- Fecho recorrente: **"Obrigado por fazer parte da nossa história!"**

O registro deles é mais formal e cerimonioso que o do cliente que avalia no
Google. No site, os dois convivem: a **casa** fala com respeito e gratidão; o
**depoimento** entra no jeito solto de quem come o pão.
