function organizarEstanteria1(libros, posiciones) {
  const librosPosiciones = libros.map((libro, i) => [posiciones[i], libro]);
  const resultado = librosPosiciones
    .sort(([a], [c]) => a - c)
    .map(([k, v]) => v);

  return resultado;
}

function organizarEstanteria2(libros, posiciones) {
  const estanteria = [];
  const minimo = Math.min(...posiciones);

  for (let i = 0; i < libros.length; i++) {
    estanteria[posiciones[i] - minimo] = libros[i];
  }

  return estanteria;
}
