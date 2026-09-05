function participanteConMasVotos(votos) {
  const conteo = [];
  let maxVotos = 0;
  let ganador;

  const participantes = new Set(votos);

  Array.from(participantes).map((participante) => {
    let contador = 0;

    votos.forEach((voto) => {
      if (participante === voto) {
        contador++;
      }
    });

    conteo.push({ candidato: participante, votos: contador });

    return conteo;
  });

  conteo.map((conteo) => {
    if (maxVotos < conteo.votos) {
      maxVotos = conteo.votos;
      ganador = conteo.candidato;
    } else if (maxVotos === conteo.votos) {
      maxVotos = conteo.votos;
      ganador = conteo.candidato;
    }
  });

  return ganador;
}
