// 4.
// Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o intervalo 0 a n,
// onde n é o maior número dentro do array. Adicione os números faltando dentro do array.

const arr = [9, 2, 3, 1, 4];

function completarIntervaloZeroAteMaximo(lista) {
  let max = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > max) {
      max = lista[i];
    }
  }
  for (let i = 0; i < max; i++) {
    let temI = false;
    for (let j = 0; j < lista.length; j++) {
      if (lista[j] === i) {
        temI = true;
        break;
      }
    }
    if (temI === false) {
      lista.push(i);
    }
  }
  return lista;
}

console.log(completarIntervaloZeroAteMaximo(arr));
