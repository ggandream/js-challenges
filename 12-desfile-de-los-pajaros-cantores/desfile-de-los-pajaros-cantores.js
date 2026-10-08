function countMelodySequences(birdNotes) {
  // tu código aquí
  let counterSecuence = 0;
  let currentSecuence = [];
  const notes = [...birdNotes];

  while(notes.length > 0){

    for(let note of notes){
      currentSecuence.push(note);

      if(currentSecuence.length > 1){
        let secuence = currentSecuence.toSorted((a, b) => {
          return a - b;
        });

        let min = Math.min(...secuence);
        let max = Math.max(...secuence);

        if (max - min + 1 === secuence.length) {
          counterSecuence++;
        }
      }
    }

    notes.shift();
    currentSecuence = [];
  }

  return counterSecuence;
}
