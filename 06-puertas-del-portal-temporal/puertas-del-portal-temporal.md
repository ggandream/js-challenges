## 🌀 Reto: Puertas del portal temporal

Fuente: https://midu.dev/retos/30-dias-de-javascript

En el año 4022, los humanos usan portales temporales para moverse entre dimensiones. Cada portal tiene un código único (una letra minúscula) y solo uno de ellos está fuera de fase: no se repite en la secuencia de activaciones. Tu misión es encontrar el primer portal fuera de fase que aparece en la lista.

Implementa la función `portalFueraDeFase` que reciba un string con los códigos de portales activados en orden, y devuelva el índice del primer portal que no se repite. Si todos los portales están en fase (es decir, se repiten), devuelve `-1`.

Ejemplos:

```js
portalFueraDeFase('xyxyxy')
// todas se repiten ➞ -1

portalFueraDeFase('quasar')
// q en el índice 0 ✅

portalFueraDeFase('aabbccddeeffg')
// g en el índice 12 ✅
```

## 📌 Reglas:

- El input siempre será un string no vacío con letras minúsculas.
- Si no hay portales fuera de fase, devuelve `-1`.
- El índice debe ser el de la primera aparición única.

## Solución:

```js
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

    if (counter === 1) {
      index = portales.indexOf(letter);
      break;
    } else {
      index = -1;
    }
  }

  return index;
}
```

## Calificación: 79/100
### Fortalezas
1. La lógica implementada resuelve correctamente el problema planteado.
2. El código es fácil de seguir y entender.

### Debilidades
1. El uso de un bucle anidado resulta en una complejidad temporal de O(n²), lo cual es ineficiente para strings largos.
2. La inclusión de `console.log` dentro de la función es una mala práctica en código de producción y afecta el rendimiento.
3. La lógica de asignación de `index` dentro del bucle es redundante.

### Próximos pasos
1. Elimina la sentencia `console.log` para mejorar el rendimiento y la limpieza del código.
2. Optimiza el algoritmo utilizando un objeto o un `Map` para contar las frecuencias de los caracteres en una sola pasada (O(n)), y luego recorre el string original para encontrar el primer carácter con frecuencia 1.
3. Simplifica la estructura de control eliminando la reasignación innecesaria de `index` dentro del bucle.
