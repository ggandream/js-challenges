function esAnagrama(primeraPalabra, segundaPalabra) {
  if (primeraPalabra.length !== segundaPalabra.length) return false;

  const palabra1 = Array.from(primeraPalabra.toLowerCase()).sort();
  const palabra2 = Array.from(segundaPalabra.toLowerCase()).sort();

  return palabra1.every((letra, i) => letra === palabra2[i]);
}
