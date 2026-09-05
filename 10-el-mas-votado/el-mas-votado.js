function participanteConMasVotos(votos) {
  const conteo = new Map();
  let maxVotos = 0;
  let candidatoElecto;

  votos.forEach((candidato) => {
    conteo.set(candidato, counter(votos, candidato));
  });

  for (const [candidato, votos] of conteo) {
    if (votos > maxVotos) {
      maxVotos = votos;
      candidatoElecto = candidato;
    }

    if (votos === maxVotos) {
      maxVotos = votos;
      candidatoElecto = candidato;
    }
  }

  return candidatoElecto;
}

function counter(array, specialItem) {
  let i = 0;
  array.forEach((item) => {
    if (item == specialItem) {
      i++;
    }
  });
  return i;
}
