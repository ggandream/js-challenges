function portalFueraDeFase(portales) {
  let letter = null;
  let index = null;

  for (let i = 0; i < portales.length; i++) {
    letter = portales[i];
    let counter = 0;

    for (let x = 0; x < portales.length; x++) {
      if (letter === portales[x]) {
        counter++;
      }
    }

    console.log(`counter is ${counter}`);
    if (counter === 1) {
      index = portales.indexOf(letter);
      break;
    } else {
      index = -1;
    }
  }

  return index;
}
