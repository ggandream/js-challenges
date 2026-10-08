function countMelodySequences(birdNotes) {
  // tu código aquí
  let counterSecuence = 0;
  let currentSecuence = [];

  while(birdNotes.length > 0){

    for(let note of birdNotes){
      currentSecuence.push(note);

      if(currentSecuence.length > 1){

        let min = Math.min(...currentSecuence);
        let max = Math.max(...currentSecuence);

        if (max - min + 1 === currentSecuence.length) {
          counterSecuence++;
        }
      }
    }

    birdNotes.shift();
    currentSecuence = [];
  }

  return counterSecuence;
}
