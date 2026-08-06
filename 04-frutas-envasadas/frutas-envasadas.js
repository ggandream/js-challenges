function frutaEmpacadaCorrectamente(entrada, salida) {
  let pila = [];
  let puntero = 0;

  for (const fruta of entrada) {
    pila.push(fruta);

    if (pila.length === entrada.length) {
      while (pila.length > 0 && pila[pila.length - 1] === salida[puntero]) {
        pila.pop();
        puntero++;
      }
    }
  }

  return pila.length === 0 && puntero === salida.length;
}

frutaEmpacadaCorrectamente(
  ["manzana", "banana", "kiwi"],
  ["kiwi", "banana", "manzana"],
);
// true → se empacaron en orden LIFO

frutaEmpacadaCorrectamente(
  ["manzana", "banana", "kiwi"],
  ["banana", "kiwi", "manzana"],
);
// false → no se puede obtener así desde una pila

frutaEmpacadaCorrectamente(
  ["manzana", "banana", "kiwi"],
  ["banana", "kiwi", "manzana"],
);

//false
