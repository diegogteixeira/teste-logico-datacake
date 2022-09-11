// 2.
// Dada a seguinte arvore binária de palavras (ver na pasta o arquivo arvore.png),
// faça uma função que busque nessa arvore pela palavra-chave.
// O output da sua função deve ser o caminho até chegar no item procurado.
// Por exemplo, se o input de buscar for “goiaba” o output deve ser uma string “Maça -> morango -> Goiaba”.

function Node(valor) {
  this.valor = valor;
  this.esquerda = null;
  this.direita = null;
}

const maca = new Node("Maçã");
const morango = new Node("Morango");
const pera = new Node("Pera");
const goiaba = new Node("Goiaba");
const limao = new Node("Limão");
const abacaxi = new Node("Abacaxi");
const laranja = new Node("Laranja");
const banana = new Node("Banana");
const cebola = new Node("Cebola");

maca.esquerda = morango;
maca.direita = pera;
morango.esquerda = goiaba;
morango.direita = limao;
pera.esquerda = abacaxi;
abacaxi.esquerda = laranja;
laranja.esquerda = banana;
laranja.direita = cebola;

function temPalavraBuscada(raiz, lista, palavraBuscada) {
  if (raiz === null) {
    return false;
  }

  lista.push(raiz.valor);

  if (raiz.valor === palavraBuscada) {
    return true;
  }

  if (
    temPalavraBuscada(raiz.esquerda, lista, palavraBuscada) ||
    temPalavraBuscada(raiz.direita, lista, palavraBuscada)
  ) {
    return true;
  }

  lista.pop();
  return false;
}

function caminhoAtePalavra(raiz, palavraBuscada) {
  const lista = [];
  let caminho = "";

  if (temPalavraBuscada(raiz, lista, palavraBuscada)) {
    for (let i = 0; i < lista.length - 1; i++) {
      caminho += lista[i] + " -> ";
    }
    caminho += lista[lista.length - 1];
  } else {
    caminho = `Não há a palavra "${palavraBuscada}" na árvore.`;
  }

  return caminho;
}

console.log(caminhoAtePalavra(maca, "Goiaba"));
console.log(caminhoAtePalavra(maca, "Banana"));
console.log(caminhoAtePalavra(maca, "Ameixa"));
