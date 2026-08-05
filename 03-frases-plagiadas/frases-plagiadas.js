function detectarPlagio(base, frasesEstudiante) {
  const normalizar = (frase) => {
    return frase
      .toLowerCase()
      .replace(/[.!?¿¡]/g, "")
      .trim();
  };
  const frasesBase = new Set(base.map((frase) => normalizar(frase)));

  return frasesEstudiante.filter((frase) => frasesBase.has(normalizar(frase)));
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
