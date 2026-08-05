function decodeSpell(spell) {
  let num = [];
  let sigNum = 0;

  for (let i = 0; i < spell.length; i++) {
    switch (spell[i]) {
      case "☽":
        num.push(1);
        break;

      case "☾":
        num.push(5);
        break;

      case "♁":
        num.push(10);
        break;

      case "⚕":
        num.push(50);
        break;

      case "⚡":
        num.push(100);
        break;

      default:
        num.push(NaN);
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] === undefined) {
      sigNum = 0;
    } else {
      sigNum = num[i + 1];
    }
    if (num[i] < sigNum) {
      num[i] = -num[i];
    }
  }

  return num.reduce((accumulator, currentNum) => {
    return accumulator + currentNum;
  }, 0);
}
