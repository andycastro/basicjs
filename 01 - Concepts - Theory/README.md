# Concepts and Theory

Aqui nós juntamos os conceitos mais utilizados de JavaScript em nosso dia-dia, ou quase isso! :)

## Pensar como o computador pensa

Para entender como trabalham os computadores, executando nossos scripts e programas, é necessário pensar como eles.

Veja esta imagem e determine quem é a pessoa mais alta:

![](https://image.freepik.com/free-vector/people-line-waiting-pay_23-2148206445.jpg)

Geralmente conseguimos ver o todo e fazer esta comparação de forma fácil, mas já parou pra pensar como o computador faria?

Uma das formas seria:

1. ler a altura da primeira pessoa
2. supor que ela é a mais alta
3. ler a altura da segunda pessoa
4. comparar com a primeira
5. ignorar a mais baixa e permanecer com a mais alta
6. ler a altura da terceira pessoa
7. comparar com a mais alta até agora
8. ignorar a mais baixa e permanecer com a mais alta e assim por diante

Tentar pensar como o computador pensa é basicamente o início para resolvermos os problemas com programação.


## Como os computadores entendem o mundo ao seu redor?

Eu e você sabemos o que é um carro branco, talkey? Talkey! Mas se pararmos para pensar, os computadores não enxergam o mundo da mesma forma que nós o vemos.

Data & data & data! Computadores precisam de dados para entender, tomar decisões e executar qualquer coisa.

Voltando para o assunto do carro branco, se o computador fosse um brother meu e estivéssemos em um bar e eu dissesse que comprei um carro branco, eu falaria da seguinte forma:

PC, bro! Comprei um carro branco. Tipo, carro é um objeto e branco é uma das propriedades chamada de cor, saca? Não? Ah pera!

let novoCarro = {
  cor: branco
};

Taí!

Basicamente dessa forma é como iremos conversar com os computadores, fazendo com que eles leiam,mostrem, executem scripts etc.

![](https://media.giphy.com/media/PSKAppO2LH56w/giphy.gif)

## Scripts

Por falar em scripts, scripts são instruções que um computador segue para chegar a um determinado objetivo.

Ou seja, você entrega alguns dados ou o computador recebe do usuário e com estes dados executa o script para chegar a um objetivo.

## Entendendo var, let e const - variáveis

A Var perdeu a confiança do grupo!

![](https://media.giphy.com/media/TTarU6pCtJfZm/giphy.gif)

Sabe aquele segredo que você conta pra alguém no grupo e este alguém _vaza_ e bagunça um pouco a sua vida? Pois bem, prazer meu nome é ```var```.

Para entender melhor sobre ```var``` e os problemas que fizeram ela perder a confiança do grupo, precisaremos entender um pouco sobre ```hoisting```.

### Hoisting

Hoisting em JavaScript é um mecaniscmo onde variáveis e declarações de funções são movidas para o topo do escopo, antes da execução total do código.

Ou seja, se eu declarar uma ```var x = 3``` no decorrer do meu código, o hoisting eleva o ```var x``` (isso mesmo, apenas a declaração sobe e não a inicialização ```= 3``` ) para o topo da minha aplicação.

Veja o código:

```
x = 3;

console.log(x);

var x;

//output 3

```
Dessa forma, o correto seria sempre declarar as ```var``` no topo da aplicação para não ser pego de surpresa por um comportamento inesperado.

Mas não é só isso! 

Em alguns casos o dev não tem como identificar de onde vem o bug, e em aplicações grandes a tarefa se torna quase impossível. Veja o exemplo:

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

### Variáveis e Constantes declaradas com ```let```e ```const``` não são hoisted -hoisteadas-
