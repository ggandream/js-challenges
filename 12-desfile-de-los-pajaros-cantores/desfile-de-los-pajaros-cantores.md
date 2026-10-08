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

```

## Calificación: 87/100

### Fortalezas
1. La lógica implementada es correcta y resuelve el problema planteado siguiendo las reglas de las secuencias.
2. El código es legible y fácil de seguir.

### Debilidades
1. La complejidad algorítmica es O(n³ log n) debido al uso de `toSorted` y `Math.min/max` dentro de un bucle anidado, lo cual no es eficiente para arreglos grandes.
2. El uso de `notes.shift()` dentro del bucle `while` es costoso (O(n)), lo que degrada el rendimiento.

### Próximos pasos
1. Optimiza el cálculo de la secuencia: en lugar de ordenar y buscar el mínimo/máximo en cada iteración, mantén un registro del valor mínimo y máximo actual y verifica si el conjunto de elementos es único (usando un Set) para validar la condición de 'sin repeticiones' y 'rango continuo'.
2. Evita el uso de `shift()` en arreglos grandes; considera usar un índice para recorrer el arreglo original.