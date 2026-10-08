## 🗳️ Reto: Desfile de los Pájaros Cantores

En una competencia anual de aves, los pájaros cantores desfilan uno tras otro. Cada pájaro canta una nota representada por un número entero. Sin embargo, al jurado solo le interesan las secuencias en las que los pájaros cantan notas sin repetir y que tengan exactamente todas las notas desde el mínimo hasta el máximo sin interrupciones.

El jurado quiere saber cuántas de estas secuencias válidas existen en el desfile. Una secuencia válida debe tener al menos 2 pájaros y cumplir:

Las notas no se repiten

Contienen todos los enteros entre el mínimo y el máximo

Tu tarea es implementar una función que cuente cuántas subsecuencias consecutivas válidas hay en el arreglo.

```js
const birdNotes = [1, 3, 2, 5, 4]
countMelodySequences(birdNotes) // → 5
 
// Las secuencias válidas son:
 
// [1, 3] → no es válida, falta el 2
// [1, 3, 2] → contiene 1, 2, 3 ✅
// [1, 3, 2, 5] → no es válida, falta el 4
// [1, 3, 2, 5, 4] → contiene todos del 1 al 5 ✅
// [3, 2] → contiene 2, 3 ✅
// [3, 2, 5] → no es válida
// [3, 2, 5, 4] → es válida ✅
// [2, 5] → no es válida, falta el 2 y 3
// [2, 5, 4] → no es válido, falta el 3
// [5, 4] → es válida ✅
 
// Total: 5 secuencias distintas que cumplen.
```

## Solución:

```js
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
```

## Calificación: 86/100

### Fortalezas
1. La lógica implementada resuelve correctamente el problema planteado.
2. El código es legible y fácil de seguir.

### Debilidades
1. El uso de `shift()` dentro de un bucle `while` tiene una complejidad temporal de O(n²), lo que puede ser ineficiente para arreglos muy grandes.
2. El cálculo repetitivo de `Math.min` y `Math.max` dentro del bucle interno aumenta innecesariamente la carga computacional.

### Próximos pasos
1. Considera iterar sobre el arreglo usando índices en lugar de modificar el arreglo original con `shift()`.
2. Para optimizar, puedes actualizar el mínimo y el máximo de forma incremental mientras recorres el arreglo en lugar de recalcularlos desde cero en cada paso.