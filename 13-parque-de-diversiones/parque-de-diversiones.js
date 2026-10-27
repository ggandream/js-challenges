function groupVisitors(energyLevels) {
  const ultimoNivelPorGrupo = [];

  for (const energy of energyLevels) {
    // busqueda binaria: primer grupo del cual el ultimo nivel sea menor que el del actual
    let inicio = 0;
    let fin = ultimoNivelPorGrupo.length;

    while (inicio < fin) {
      const mitad = Math.floor((inicio + fin) / 2);
      if (ultimoNivelPorGrupo[mitad] < energy) {
        fin = mitad;
      } else {
        inicio = mitad + 1;
      }
    }

    //crear nuevo indice o reasignar indice con ultimo con mas energia
    ultimoNivelPorGrupo[inicio] = energy;
  }
  return ultimoNivelPorGrupo.length;
}