# Teste Ingresso.com

## Observações acerca da arquitetura escolhida

Utilizei `Vue.js` com `Typescript`, aproveitando para usufruir da sintaxe mais amigável do `vue-class-component`.

Optei por fazer [componentes Single-File](https://br.vuejs.org/v2/guide/single-file-components.html), como recomenda a documentação do `Vue.js`, pois posso ver com mais clareza como o HTML e o Javascript se conversam no projeto (além de ter um termômetro natural de "big components" - quando o arquivo acaba ficando grande demais, me faz querer quebrá-lo em componentes menores).

Também utilizei `Vuex` para gerenciamento / compartilhamento de estado entre os componentes. Mesmo o projeto sendo pequeno, permite escalabilidade e facilidade de desenvolvimento.

Utilizo apenas 1 rota dentro do projeto, mas a arquitetura estaria pronta para receber novas rotas com muita facilidade caso fosse necessário em algum ponto do desenvolvimento.

## Alguns padrões de projeto

Utilizei classes na construção de componentes e módulos internos (inclusive pras models, por acreditar ser mais semanticamente coerente do que o uso de interfaces para tal).

Para os estilos, adotei o [RSCSS](https://willianjusten.com.br/falando-sobre-rscss/) pela praticidade e organização. O layout é amigável para mobile e desktop.

As mensagens de commits seguem as recomendações do [Conventional Commits](https://www.conventionalcommits.org/).

## Testes unitários

O projeto está configurado para trabalhar com `Jest` na criação de testes unitários. Gostaria de ter criado mais testes, porém não tive tempo hábil, então criei apenas um teste snapshot de exemplo na pasta `tests`.

## Vamos à prática?

Primeiramente, baixe o respositório e instale as dependências com:
```
yarn install
```

Para rodar localmente o projeto, utilize o comando:
```
yarn serve
```

Para gerar um build para publicação:
```
yarn build
```

Para rodar os testes unitários:
```
yarn test:unit
```
