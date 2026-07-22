# Estrutura do site — Padaria Santa Helena

Proposta montada em 22/07/2026, a partir de todo o material levantado:
avaliações, acervo de fotos, 21 posts, 3 vídeos, logo e a referência da Dona
Deola.

---

## A tese

> **Modernizou a loja, não o jeito.**

O acervo prova isso sozinho: a fila na calçada nos anos 70 e o balcão cheio
hoje. A vitrine virou refrigerada, o letreiro virou metal, e a mesma gente
continua na porta às 5h45.

Tudo no site serve essa frase. Se uma seção não serve, ela sai.

## O que o site precisa fazer, em ordem

1. **Dizer que está aberto e como chegar** — a maioria chega pelo Google, no
   celular, na rua, decidindo se passa lá agora
2. **Mostrar o que tem** — as avaliações citam produto por nome; o site tem que
   ter esses nomes e essas fotos
3. **Puxar encomenda pelo WhatsApp** — é a única transação que o site consegue
   gerar de verdade
4. **Contar a história** — é o que nenhum concorrente copia

---

## As seções

### 1. Abertura

**Conteúdo:** logo, "Desde 1968", uma frase curta, um produto recortado, e —
isto é o mais importante — **o estado da loja agora**.

> 🟢 **Aberto agora** · fecha às 20h · R. Sete de Setembro, 130 · [WhatsApp]

Um selo que lê o horário real do visitante e responde "aberto" ou "abre amanhã
às 5h45". Padaria abre às 5h45 e fecha às 20h, domingo não abre — quem consulta
às 6h da manhã ou às 21h precisa dessa resposta **antes de qualquer rolagem**.

**Movimento:** logo animada em três tempos (selo aparece → espiga se desenha →
manuscrita escreve) + produto descendo em parallax. **Parallax desligado no
celular.** O selo de "aberto agora" **nunca** anima.

> Depende do vetor da logo. Sem ele, abertura estática.

### 2. O que sai do forno — catálogo

O que a Dona Deola não tem e a Santa Helena precisa.

**Categorias**, tiradas do que existe de fato:

| Categoria | Itens conhecidos |
| --- | --- |
| Pães | Pão de sal, baguete, pão de leite ninho, pão recheado, rosca de leite condensado |
| Pão de queijo | Pão de queijo, bola de pão de queijo |
| Salgados e lanches | Cachorro-quente assado, esfiha, pastel, pizza, torta de pão |
| Bolos e tortas | Banana, limão, fubá, pé de moleque, batata doce, cenoura, torta gelada |
| Doces e biscoitos | Queijadinha, palha italiana, croissant, **broa**, **biscoito de polvilho temperado** |

**Mercearia: entra, mas não como categoria.** Decidido em 22/07/2026 — a loja
também vende secos e enlatados, mas não é o foco. Vira **uma linha de apoio no
fim do catálogo**, sem foto de produto e sem lista:

> *Também temos o básico do dia a dia: leite, café, açúcar e a mercearia do
> bairro. Você resolve tudo numa parada só.*

Isso captura quem procura "mercado perto de mim" sem roubar espaço do pão.

**Sem preço.** Vários produtos são vendidos por quilo, com etiqueta de balança —
preço no site envelhece em uma semana e gera reclamação. Preço fica na loja.

**Movimento:** cards revelando ao entrar na tela, em cascata curta.

> ⚠️ **Broa** e **biscoito de polvilho** estão na lista porque os clientes os
> citam pelo nome — mas **não existe foto de nenhum dos dois**. Ver
> [lista-de-fotos.md](../saidas/lista-de-fotos.md).

### 3. Encomendas

O briefing diz que famílias encomendam bolo e salgado pro fim de semana. É a
conversão do site.

**Conteúdo:** o que dá pra encomendar, prazo, e um botão de WhatsApp que já abre
com a mensagem escrita ("Oi! Queria encomendar um bolo para...").

**Movimento:** nenhum. É formulário de serviço.

- [ ] Levantar com o cliente: prazo mínimo, precisa de sinal, tem tabela de
      tamanhos?

### 4. A fila continua na porta — nossa história

O coração do site.

**Conteúdo:**

- 1968, José Ari começando ainda menino; Marilene chegando pra somar
- O par **antes / hoje**: a fachada com fila de vinte pessoas × a fachada de
  hoje; o balcão de banquetas × as vitrines refrigeradas
- A homenagem da Prefeitura de Timóteo, entre 45 empresas

**Movimento:** o par antes/depois em transição controlada pelo cursor ou pela
rolagem. É aqui que a animação vale a pena — ela **é** o argumento.

### 5. Quem faz o pão

Nove panificadores fotografados, um por um, no lugar onde trabalham.

**A divisão vem de graça do uniforme deles:**

| | |
| --- | --- |
| 🟨 **Camiseta amarela** | quem atende |
| ⬜ **Camiseta branca** | quem faz |

**Destaque:** Valdister e Flávio, 32 anos de casa cada um.

**E o vídeo da homenagem toca aqui.** A equipe inteira aplaudindo, a Valdister
se emocionando. Nenhum texto que eu escreva chega perto disso.

> Depende dos arquivos originais — chegaram só miniaturas de ~310 px.

### 6. O que dizem

**4,9 de 5, com 771 avaliações.** Esse número abre a seção, em corpo grande.

Depoimentos reais, com o nome de quem escreveu:

> "O pão não tem outro igual."
> "Pão de queijo de tirar o chapéu, aprovado por mineiros."
> "Sempre na mesma pegada, nunca deixa falhar."

**Movimento:** carrossel simples, sem autoplay agressivo.

### 7. Temporada

A padaria faz campanha sazonal com identidade própria — o "Arraiá de Sabores"
tem selo, adesivo e até espantalho na loja.

Um bloco que troca conforme a época: festa junina, Páscoa, Natal, Dia das Mães.

**Sem isso o site está parado em três meses.**

- [ ] Definir quem troca esse bloco e com que frequência

### 8. Onde e quando

Mapa, endereço, horário completo, telefone/WhatsApp, Instagram, Facebook.

**Movimento: nenhum.** Informação de serviço aparece na hora. Sem fade, sem
delay, sem revelar ao rolar.

---

## Sistema visual

### Cores — medidas na logo, não estimadas

```css
--marrom: #492E25;  /* a cor da marca, e quem escreve */
--trigo:  #E1B76B;  /* dourado de fundo */
--ambar:  #CD913B;  /* dourado de detalhe, filetes */
--creme:  #FFF2E2;  /* fundo claro e texto sobre escuro */
```

**Duas regras não negociáveis:**

1. **Dourado nunca carrega texto sobre fundo claro** (1,7:1 de contraste).
   Dourado é fundo, filete ou detalhe. Quem escreve é o marrom e o creme
2. **Não existe azul, verde nem vermelho.** No sistema deles as únicas cores
   saturadas vêm da própria comida. Mantemos assim

### Tipografia — sistema "Calor moderno"

| Papel | Fonte | Uso |
| --- | --- | --- |
| Assinatura | **Telma 700** | Nome da casa, uma palavra por título |
| Título | **Jost 700/800** | h1, h2 |
| Rótulo | **Jost 200** caixa alta, tracking .18em | "DESDE 1968", nomes de seção |
| Corpo | **Figtree 400/600** | Texto, menu, botão |

Detalhe em [FONTES.md](../identidade-visual/FONTES.md). ~78 KB no total.

**A regra de ouro, herdada do Instagram deles:** **uma palavra por título vai na
manuscrita**, e é sempre a emocional, nunca a informativa.

```
Pão de queijo          ← Jost 800   (o que é)
quentinho              ← Telma 700  (por que comprar)
```

Nunca duas. É essa contenção que faz parecer caro.

### Componentes herdados da marca

- **Onda branca com filete dourado** no rodapé — já é o rodapé deles desde 2023
- **Marca d'água da espiga**, grande, sangrando pela borda, em tom vizinho ao
  fundo. Aparece em 12 das 21 peças
- **A tábua de madeira com a logo gravada a fogo** — vira moldura das fotos de
  produto

---

## Regras de movimento

Aprendidas no código da Dona Deola, filtradas pelo público daqui.

| | |
| --- | --- |
| ✅ Abertura com movimento | Prende, e é uma vez só |
| ✅ Revelar seção ao entrar | 200–300 ms, sutil |
| ✅ Antes/depois na história | A animação é o argumento |
| ❌ Parallax no celular | Trava rolagem, esquenta aparelho |
| ❌ Rolagem sequestrada | Público não tem paciência |
| ❌ Animar horário, endereço, WhatsApp | Serviço aparece na hora |
| ✅ `prefers-reduced-motion` | Respeitado sempre |

**A regra:** animação serve pra fazer o produto parecer gostoso e a história
parecer longa. Nunca pra atrasar a informação.

**Peso:** a Dona Deola carrega GSAP + Swiper + AOS + Splitting + Livewire +
Tailwind + GTM + Clarity. Aqui, decidir se vale GSAP + ScrollTrigger ou se
`IntersectionObserver` + CSS puro resolve — cobre uns 80% do efeito por uma
fração do peso. Quem abre esse site está no 4G, na rua.

---

## O que ainda trava

| # | Pendência | Trava o quê | Situação |
| --- | --- | --- | --- |
| 1 | **Fotos em alta** — produtos, equipe, loja | Praticamente tudo | 🔴 **Bloqueante** |
| 2 | Nome dos nove panificadores | Seção da equipe | 🟠 Aberta |
| 3 | Autorização de imagem | Equipe e história | 🟠 Aberta |
| 4 | Regras de encomenda | Seção 3 | 🟠 Aberta |
| 5 | Domínio | Publicação | 🟠 Aberta |
| 6 | Vetor `.svg` da logo | **Só** a abertura animada | 🟡 Contornável |
| 7 | ~~Mercearia entra?~~ | — | ✅ Resolvido 22/07: entra como linha de apoio |
| 8 | ~~Logo com fundo transparente~~ | — | ✅ Resolvido 22/07: os dois PNG chegaram |

**Sobrou uma bloqueante: foto.** O resto ou está resolvido, ou dá pra tocar em
paralelo, ou tem plano B.

**Plano B da abertura, sem o vetor:** em vez do traço se desenhando, o PNG da
logo entra em escala com o produto descendo em parallax atrás. Perde o efeito
mais bonito, mas não trava a entrega.
