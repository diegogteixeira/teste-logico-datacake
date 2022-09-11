// 3.
// Dado o array de números inteiros [1, 15, 2, 7, 2, 5, 7, 1, 4] crie uma função que recebe um argumento X
// e retorne true ou false caso haja no array uma combinação de soma entre dois números que resulte no input X.
// Exemplo: Se X=2, a função deve retornar true pois existem dois números 1 dentro do array 1+1 = 2.
// Caso X=1231 a função deve retornar false pois não existe uma combina de dois números capazes de somar 1231.

const arr = [1, 15, 2, 7, 2, 5, 7, 1, 4];

function temDoisNumerosQueSomamX(lista, x) {
  let temSim = false;
  for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[i] + lista[j] === x) {
        temSim = true;
      }
    }
  }
  return temSim;
}

console.log(temDoisNumerosQueSomamX(arr, 2));