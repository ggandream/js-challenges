function candidatosCompatibles(oferta, candidatos) {
  let candidatosPts = [];
  const criterio = Math.floor((70 * oferta.length) / 100);
  let score = 0;

  candidatos.forEach((candidato) => {
    oferta.forEach((habilidad) => {
      if (
        candidato.skills.some(
          (s) => s.toUpperCase() === habilidad.toUpperCase(),
        )
      ) {
        score = score + 1;
      }
    });
    candidatosPts.push({ id: candidato.id, score: score });
    score = 0;
  });

  return candidatosPts
    .filter((c) => c.score >= criterio)
    .toSorted((a, b) => a.id.localeCompare(b.id))
    .map((c) => c.id);
}
