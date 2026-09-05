function participanteConMasVotos(votos) {
  const conteoVotos = new Map();
  let maxVotos = 0;
  let ganador;

  votos.forEach((voto) => {
    const cantVotos = (conteoVotos.get(voto) || 0) + 1;
    conteoVotos.set(voto, cantVotos);

    if (cantVotos >= maxVotos) {
      maxVotos = cantVotos;
      ganador = voto;
    }
  });

  return ganador;
}
