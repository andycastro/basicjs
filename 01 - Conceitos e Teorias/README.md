# Conceitos e Teorias

Aqui nós juntamos os conceitos mais utilizados de JavaScript em nosso dia-dia, 
ou quase isso! :)

## Pensar como o computador pensa

Para entender como trabalham os computadores, executando nossos scripts e 
programas, é necessário pensar como eles.

Veja esta imagem e determine quem é a pessoa mais alta:

![](https://image.freepik.com/free-vector/people-line-waiting-pay_23-2148206445.jpg)

Geralmente conseguimos ver o todo e fazer esta comparação de forma fácil, 
mas já parou pra pensar como o computador faria?

Uma das formas seria:

1. ler a altura da primeira pessoa
2. supor que ela é a mais alta
3. ler a altura da segunda pessoa
4. comparar com a primeira
5. ignorar a mais baixa e permanecer com a mais alta
6. ler a altura da terceira pessoa
7. comparar com a mais alta até agora
8. ignorar a mais baixa e permanecer com a mais alta e assim por diante

Tentar pensar como o computador é basicamente o início para resolvermos os 
problemas com programação.


## Como os computadores entendem o mundo ao seu redor?

Eu e você sabemos o que é um carro branco, talkey? Talkey! Mas se pararmos para 
pensar, os computadores não enxergam o mundo da mesma forma que nós o vemos.

Data & data & data! Computadores precisam de dados para entender, tomar decisões 
e executar qualquer coisa.

Voltando para o assunto do carro branco, se o computador fosse um brother meu e 
estivéssemos em um bar e eu dissesse que comprei um carro branco, eu falaria 
da seguinte forma:

PC, bro! Comprei um carro branco. Tipo, carro é um objeto e branco é uma das 
propriedades chamada de cor, saca? Não? Ah pera!

let novoCarro = {
  cor: branco
};

Taí!

Basicamente dessa forma é como iremos conversar com os computadores, fazendo 
com que eles leiam,mostrem, executem scripts etc.

![](https://media.giphy.com/media/PSKAppO2LH56w/giphy.gif)

## Scripts

Por falar em scripts, scripts são instruções que um computador segue para chegar 
a um determinado objetivo.

Ou seja, você entrega alguns dados ou o computador recebe do usuário e com estes 
dados executa o script para chegar a um objetivo.

## Entendendo var, let e const - variáveis

A Var perdeu a confiança do grupo!

![](https://media.giphy.com/media/TTarU6pCtJfZm/giphy.gif)

Sabe aquele segredo que você conta pra alguém no grupo e este alguém _vaza_ e 
bagunça um pouco a sua vida? Pois bem, prazer meu nome é ```var```.

Para entender melhor sobre ```var``` e os problemas que fizeram ela perder a 
confiança do grupo, precisaremos entender um pouco sobre ```hoisting```.

### Hoisting

Hoisting em JavaScript é um mecaniscmo onde variáveis e declarações de funções 
são movidas para o topo do escopo, antes da execução total do código.

Ou seja, se eu declarar uma ```var x = 3``` no decorrer do meu código, 
o hoisting eleva o ```var x``` para o topo da minha aplicação 
(isso mesmo, apenas a declaração sobe e não a inicialização ```= 3``` ).

Veja o código:

```
x = 3;

console.log(x);

var x;

//output 3

```
Dessa forma, o correto seria sempre declarar as variáveis ```var``` no topo da 
aplicação para não ser pego de surpresa por um comportamento inesperado.

Mas não é só isso! 

Em alguns casos o dev não tem como identificar de onde vem o bug, e em aplicações 
grandes a tarefa se torna quase impossível. Veja o exemplo:

```
function contador () {
  for (var idade = 0; idade <= 3; idade++){
    console.log('Dentro ' + idade);  
  }
  console.log('fora ' + idade);  
}
contador();

//output
Dentro 0
Dentro 1
Dentro 2
Dentro 3
fora 4

```
![](https://s2.glbimg.com/2O7EJhhe5zJe49MoxY1rPq0CDHQ=/0x0:694x352/695x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/C/k/qBnGliTfG5aeJ8GuevvQ/tekpix.jpg)

#### Variáveis e Constantes declaradas com ```let```e ```const``` não são hoisted <s>_hoisteadas_</s>

### let

O ECMAScript 2015 introduziu duas importantes opções de declaração para nossas 
variáveis, ```let``` e ```const```.

Essas duas palavras nos dão variáves de bloco de escopo, ou seja, mais incisivo, 
menos erros com declarações globais <s>sorry var</s>.

```
{
  let x = 5;
}
// x não pode ser usado aqui
```

O que isso significa?

Significa que você passará a ter mais controle do que é feito sem se preocupar 
com escopos globais.

Confira:

```
var a = 1;
var b = 2;

if ( a === 1 ){
    var a = 11; // escopo global
    let b = 22; // o escopo é dentro do bloco if

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

```

Veja: 

![](https://valde.ci/images/posts/es6/const-and-let/const-and-let-chart.png)

Só mais dois exemplos comparando ```var``` e ```let```:

```
var i = 5;
for (var i = 0; i < 10; i++){
  // faz alguma coisa
}
// O valor de i aqui é 10

```
Usando let

```
let i = 5;
for (let i = 0; i < 10; i++) {
// faz alguma coisa
}
// O valor de i aqui é 5

```

### const


Confesso que no início achei estranho uma _variável_ chamada _const_, pois 
se é _const_ de *constante* como pode ser chamada de variável?

define variável: sujeito a variações ou mudanças, instável etc.

define constante: que não muda, inalterável, invariável, fixo. ```¯\_(ツ)_/¯```

Mas olha que bacana:

>_A  declaração *const* cria uma variável cujo o valor é fixo, ou seja, uma 
>constante somente leitura. Isso não significa que o valor é imutável, apenas 
>que a variável constante não pode ser alterada ou retribuída._

[Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)

Sabe o que isso quer dizer?

Isso mesmo, **Programação Funcional**! Uma das premissas da programação funcional 
é o ```princípio da imutabilidade```.

E é aqui que eu já emendo com a pergunta que está em sua cabeça agora:

![](https://media.giphy.com/media/5XRB3Ay93FZw4/giphy.gif)

### var, let ou const, qual devo usar?

Vai de ```const```! Utilizar valores mutáveis torna o desenvolvimento bastante 
caro, pois não há garantia de que no código você não irá se deparar com efeitos colaterais da mutabilidade.

Alguma imutabilidade é invevitável, mas vai sempre de ```const``` e se em algum momento você perceber que não será possível utilizar ```const```, ai você vai de ```let```, mas usa ```const```.

## O que é programação Funcional?

É um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis.

A programação funcional enfatiza a aplicação de funções, ao invés da programação imperativa, que enfatiza mudanças no estado do programa.

Na programação funcional as funções são tratadas de forma em que possam ser passadas como parâmetros e valores para outras funções e podendo ter o resultado armazenado em uma constante.

## O que é Thread?

É um fluxo único de controle sequencial dentro de um programa, ou seja, um pequeno programa que trabalha com subsistema, sendo uma forma de um processo se autodividir em duas ou mais tarefas.

![](https://giphygifs.s3.amazonaws.com/media/ccRdPf8zWkivm/giphy.gif)

Um exemplo de thread: Browser.

Em um browser tem várias coisas acontecendo ao mesmo tempo, scroll, download de uma imagem, play de audio, download de nova página, etc.

O JavaScript é considerado uma linguagem single-thread, por possuir uma única Call Stack (pilha de chamadas) só pode fazer uma coisa de cada vez.

Tem um texto massa postado por Robson Oliveira na comunidade ReactBrasil que fala sobre isso, dá uma sacada: [Como o Javascript funciona: uma visão geral da engine, runtime e da call stack](http://bit.ly/jsthread)

## null e undefined, já sacou?

```undefined``` é quando uma variável foi declarada, mas não foi atribuída um valor a ela.

```
var testVar;
console.log(testVar); // mostra undefined
console.log(typeof testVar); // mostra undefined

```

```null``` é um valor de atribuição e pode ser atribuído a uma variável com uma representação sem valor.

```
var testVar = null;
console.log(testVar); // mostra null
console.log(typeof testVar); // mostra null

```

*NULL*

![](https://www.bombounowa.com/wp-content/uploads/e-so-isso-nao-tem-mais-jeito.jpg)

*UNDEFINED*

![](https://images-americanas.b2w.io/produtos/01/00/image/18535/7/18535753G1.jpg)

*=*

![](https://i.stack.imgur.com/0YSyJ.jpg)

## Desestruturação em JavaScript

O _Destructuring_ ou Desestruturação no javaScript foi apresentado como funcionalidade no ES6 como forma de diminuir a escrita de códigos, mas atingindo o mesmo objetivo para extrair dados de arrays, objetos e até de retorno de variáveis distintas.

### Como funcionava até o ES5?

Vamos supor que eu tenho os seguintes dados de um veículo de uma loja:

```
carro = {
  marca: 'Volkswagen',
  modelo: 'fusca',
  opcionais: {
    seguranca: {
      itens: ['airbag', 'abs', 'anti-colisão']
    }
  }
}
```
Para exibir estes dados, pelo menos até o ES5, você provavelmente faria:

```
var carroMarca = carro.marca;
var opcionaisSeguranca = carro.opcionais.seguranca.itens

console.log(carroMarca);
console.log(opcionaisSeguranca);
```
É aqui que entra a desestruturação de objetos. Veja como fazer já utilizando esta
funcionalidade do ES6:

### Desestruturação

```
const { marca, opcionais: { itens: } } = carro

console.log(marca);
console.log(opcionais);
```
Nesta mesma linha de racioncínio seguimos:

### Desestruturação de array

```
const alunos = ["Janeiro", "Fevereiro", "Março"]; //

const [Janeiro, Fevereiro, Março] = alunos
console.log(Janeiro);
console.log(Fevereiro);
console.log(Março);
```
### Operador Spread

Como o operador Spread eu consigo atribuir o resto de um array para uma variável,
veja:

```
const [vencedor, ...demaisPosicoes] = ["Botas", "Hamilton", "Verstappen"];
console.log(`O vencedor foi: ${vencedor}`); // O vencedor foi: Botas
console.log(`O segundo e terceiro lugar: ${demaisPosicoes}`); // O segundo e terceiro
lugar: Hamilton,Verstappen
```
Aprofunde mais [Atribuição via desestruturação (destructuring assignment) - Developer Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)

## Entendendo de uma vez por todas o THIS

...

## Template Literals JavaScript

Templates Literals são literals que representam uma ```string``` com suporte a interpolação e múltiplas linhas.

Introduzido no ES6, as Templates Literals nos ajudam a escrever um código mais enxuto, podendo ser possível mesclar strings e valores, dando mais controle sobre strings dinâmicas.

Para utilizar Template Literals basta utilizar ``` ` ``` _crase_ ao invés de ``` '  ``` _aspas_.

Sacaí:

Antes

```
const literal = "Template Literals";

console.log('Bem-vindo ' + literal + '!');

// Bem-vindo Template Literals!
```
### Com Template Literals o código fica assim:

```
const literal = "Template Literals";

console.log(`Bem-vindo ${literal}!`);

// Bem-vindo Template Literals!

```
### Multiplas linhas com Template Literals

```
const mult = `Aqui está um texto
com quebra de linha,
utilizando Template Literals.`

```
Enjoy!

## map(), filter() e reduce() em JavaScript

...