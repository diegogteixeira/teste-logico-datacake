// 1.
// Dado o Array de inteiros abaixo, ordene-o de tal forma que os números “1” estejam à esquerda.
// Os itens devem ser modificados no lugar,
// ou seja, você não ira trocar posições e sim colocar os números “1” no inicio do Array.
// [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]

const arr = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];

function numerosUmAEsquerda(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 1) {
      lista.unshift(parseInt(lista.splice(i, 1).toString()));
    }
  }
  return lista;
}

console.log(numerosUmAEsquerda(arr));
