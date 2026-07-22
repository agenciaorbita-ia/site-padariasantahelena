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
| Abertura | Entrada em cascata (`--d` por elemento, 0 a 820 ms) |
| Colagem | As três fotos flutuam em durações diferentes (7s, 8,5s, 10s) e têm parallax em velocidades diferentes — a do meio anda ao contrário, o que dá profundidade |
| Carimbo | Texto circular girando em 26s, com a espiga parada no miolo |
| Espigas de fundo | Balançam devagar, em fases diferentes |
| Selo "aberto" | **Duas ondas verdes pulsando**, defasadas em 1,1s. Só quando está aberto |
| Cards | Sobem e giram meio grau (alternando o lado), a foto dá zoom, um **brilho dourado atravessa** a imagem e um filete cresce sob o nome |
| Casal fundador | Zoom leve na foto ao passar o mouse |
| Seta de rolar | Pontinho descendo em loop |

Tudo respeita `prefers-reduced-motion`.

## O que o JS faz

| # | O quê |
| --- | --- |
| 1 | **Aberto agora** — lê o relógio do visitante. Seg–sáb 5h45–20h, domingo fechado. Mostra "fecha em X min" na última hora e "abre amanhã/segunda" quando fechado. Atualiza a cada minuto |
| 2 | **Revelar ao rolar** — cascata curta, no máximo 350 ms |
| 3 | **Parallax** — só acima de 900 px. Desligado no celular de propósito. Velocidade por elemento via `data-flut` |
| 4 | **Filtro do catálogo** |
| 5 | **Menu do celular** |

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
