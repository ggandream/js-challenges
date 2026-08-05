function detectarPlagio(base, frasesEstudiante) {
  const frasesBase = new Set(
    base.map((frase) =>
      frase
        .toLowerCase()
        .trim()
        .replace(/[.!?¿¡]/g, ""),
    ),
  );

  return frasesEstudiante.filter((frase) =>
    frasesBase.has(
      frase
        .toLowerCase()
        .trim()
        .replace(/[.!?¿¡]/g, ""),
    ),
  );
}

const base = [
  "El conocimiento es poder.",
  "Aprender nunca es una pérdida de tiempo!",
  "Programar es divertido",
];

const frasesEstudiante = [
  "el conocimiento es poder",
  " Aprender nunca es una pérdida de tiempo ",
  "programar es divertido.",
  "La práctica hace al maestro",
];

console.log(detectarPlagio(base, frasesEstudiante));
// ➞ [
// "el conocimiento es poder",
// " Aprender nunca es una pérdida de tiempo ",
// "programar es divertido."
// ]

console.log(
  detectarPlagio(["La práctica hace al maestro."], ["La teoría es importante"]),
);
