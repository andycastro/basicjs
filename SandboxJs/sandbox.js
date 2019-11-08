/* Destructuring, Desestruturação JS ES6/ES7
*/
carro = {
  marca: 'Volkswagen',
  modelo: 'Fusca',
  opcionais: {
    seguranca: {
      itens: ['airbag', 'abs', 'green']
    }
  }
};

const { marca, opcionais: { seguranca: { itens }} } = carro;

console.log(`Marca do veículo: ${marca}`);
console.log(`Itens de segurança do veículo:  ${itens}`);

// const companyName = company.name;
// const shirtsColor = company.products.shirts.colors;

// console.log(companyName);
// console.log(shirtsColor);

function imprimeDadosDoAluno(aluno) {
  console.log(aluno.nome);
  console.log(aluno.idade);
  console.log(aluno.email);
}
imprimeDadosDoAluno("Matias");