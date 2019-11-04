# Concepts and Theory

Aqui nós juntamos os conceitos mais utilizados de JavaScript em nosso dia-dia, ou quase isso! :)

## Pensar como o computador pensa

Para entender como trabalham os computadores executando nossos scripts e programas é necessário pensar como eles.

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

Tentar pensar como o computador pensa é basicamente o início para resolver os problemas com programação.


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

Bom, tudo começou quando geral usava ```var``` pra declarar suas variáveis, e até ai tudo ok ~eu acho~, no entanto, muitas vezes a var vaza fora do escopo, deixando um bug na conta do dev pra resolver.

