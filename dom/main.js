// Manipulação de DOM

// Como criar elementos na DOM utilizando JS?

<ul>
  <li>
    Texto qualquer
  </li>
</ul>

// Para replicar este exemplo utilizando JS para manipular o DOM, precisaremos 
// trabalhar com as seguintes funções:

document.createElement();   // cria o elemento desejado
document.createTextNode(); // adiciona o conteúdo que ficará no elemento desejado
appendChild();             // junta os dois elementos

// Ex:. 
let textoQualquer = "Texto qualquer"; // conteúdo que ficará dentro do elemento
let novoElemento = document.createElement('li'); 
let novoConteudo = document.createTextNode(textoQualquer);
novoElemento.appendChild(novoConteudo);

// setAttribute - verificar
