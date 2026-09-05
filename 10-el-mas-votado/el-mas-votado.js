function participanteConMasVotos(votos) {
  const participantes = new Set(votos);
  const conteoVotos = new Map();

  Array.from(participantes).forEach((participante) => {
    let cantVotos = 0;
    votos.forEach((voto) => {
      if (participante === voto) cantVotos++;
    });
    conteoVotos.set(participante, cantVotos);
  });

  const ganador = [...conteoVotos.entries()].reduce((acc, actual) => {
    let resultado = 0;
    resultado = actual[1] > acc[1] ? actual : acc;
    if (actual[1] === acc[1]) resultado = ["Empate", 0];
    return resultado;
  });

  if (ganador[0] === "Empate") ganador[0] = votos.at(-1);

  return ganador[0];
}
