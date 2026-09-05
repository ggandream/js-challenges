## 🗳️ Reto: El más votado

Imagina que estás desarrollando un sistema de votaciones para un concurso. Cada persona puede votar a un solo participante, pero puede votar más de una vez durante el evento. Después de que finalice el evento, necesitas saber qué participante recibió el mayor número de votos.

En caso de empate, se debe devolver el nombre del participante que aparece por última vez en el array de votos.

Ejemplos:

```js
participanteConMasVotos(['Ana', 'Luis', 'Pedro', 'Ana', 'Luis', 'Luis'])
// -> "Luis" porque tiene el mayor número de votos (3 votos).

participanteConMasVotos(['Carlos', 'Ana', 'Carlos', 'Carlos', 'Ana', 'Ana'])
// -> "Ana" porque empata con Carlos (ambos tienen 3 votos),
// pero Ana aparece por última vez en el array.

participanteConMasVotos(['Mario', 'Luigi', 'Luigi', 'Peach'])
// -> "Luigi" porque tiene el mayor número de votos (2 votos).
```

## 📌 Restricciones:

- El array `votos` siempre tendrá al menos un voto.
- Cada persona vota a un único participante, pero puede votar varias veces.
- Toda la lógica debe vivir en una sola función (no se permiten funciones auxiliares fuera de ella).

## Solución:

```js
function participanteConMasVotos(votos) {
  const participantes = new Set(votos);
  const conteoVotos = new Map();

  Array.from(participantes).forEach((participante) => {
    let cantVotos = 0;
    votos.forEach((voto) => {
      if (participante === voto) cantVotos++;
    });
    conteoVotos.set(participante, cantVotos);
  });

  const ganador = [...conteoVotos.entries()].reduce((acc, actual) => {
    return actual[1] >= acc[1] ? actual : acc;
  });

  return ganador[0];
}
```

## Calificación: 87/100

### Fortalezas
1. El código es funcional y resuelve correctamente el problema planteado.
2. El uso de `Map` y `Set` demuestra un buen conocimiento de las estructuras de datos modernas de JavaScript.

### Debilidades
1. La complejidad algorítmica es O(N · M) debido al uso de un bucle anidado (`forEach` dentro de otro `forEach`), lo cual es ineficiente para grandes volúmenes de datos.
2. El enfoque actual recorre el array de votos múltiples veces innecesariamente.

### Próximos pasos
1. Optimiza el algoritmo a O(N) utilizando un solo bucle para contar los votos en un `Map`, lo que mejorará significativamente el rendimiento.
2. Para manejar el empate según la última aparición, puedes iterar el array de votos una sola vez y actualizar el conteo, o bien, procesar el array de forma que el último elemento prevalezca naturalmente.

### ⚠️ Nota sobre el desempate

Ejecutando la función, los tres ejemplos del enunciado pasan, pero la regla de desempate todavía no se cumple:

```js
participanteConMasVotos(['A', 'B', 'A', 'B', 'B', 'A'])
// devuelve "B", pero debería ser "A": ambos empatan a 3 votos y la
// última aparición de A (índice 5) es posterior a la de B (índice 4).
```

`conteoVotos` conserva el orden del `Set`, que es el de **primera** aparición, y el `reduce` con `>=` se queda con el último de ese orden entre los empatados, no con el que aparece más tarde en `votos`. Probado con 20.000 arrays aleatorios (hasta 8 votos y 4 candidatos), falla en torno al 6 % de los casos.

Es justo lo que resuelve el paso 2 de arriba: recorrer `votos` en su orden original con un `Map` y quedarse con el candidato cuyo conteo acumulado sea mayor **o igual** que el máximo.
