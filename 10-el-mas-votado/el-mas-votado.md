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

participanteConMasVotos([ 'A', 'B', 'A', 'B', 'B', 'A' ]);
// -> "A".

participanteConMasVotos([ 'C', 'C', 'B', 'B', 'C', 'B', 'A', 'D' ]);
// -> "B".
```

## 📌 Restricciones:

- El array `votos` siempre tendrá al menos un voto.
- Cada persona vota a un único participante, pero puede votar varias veces.
- Toda la lógica debe vivir en una sola función (no se permiten funciones auxiliares fuera de ella).

## Solución:

```js
function participanteConMasVotos(votos) {
  const conteoVotos = new Map();
  let maxVotos = 0;
  let ganador;
  
  votos.forEach((voto) => {
    const cantVotos = (conteoVotos.get(voto) || 0) + 1;
    conteoVotos.set(voto, cantVotos);

    if(cantVotos >= maxVotos){
      maxVotos = cantVotos;
      ganador = voto;
    }

  })

  return ganador;
}
```

## Calificación: 95/100

### Fortalezas
1. El uso de un `Map` para el conteo de votos es eficiente y adecuado para este problema.
2. La lógica para manejar el empate (actualizar el ganador cuando los votos son mayores o iguales) resuelve correctamente el requisito de devolver el último participante en caso de empate.
3. Código limpio, legible y fácil de seguir.

### 🔑 La clave del desempate

Contar y elegir al ganador en el **mismo** recorrido es lo que hace que el empate salga bien. Como se recorre `votos` en su orden original, el `>=` deja ganar siempre al voto más tardío, que es justo lo que pide el enunciado.

Intentos anteriores decidían el ganador con un `reduce` sobre `conteoVotos.entries()`, y ahí el desempate falla: `entries()` va en orden de inserción, es decir, de **primera** aparición de cada participante, así que el `>=` se quedaba con el que debutó más tarde, no con el que fue votado más tarde. Un caso que lo destapa:

```js
participanteConMasVotos(['A', 'C', 'C', 'B', 'A'])
// -> "A": A y C empatan a 2 votos, pero la última A (índice 4)
// va después de la última C (índice 2). La versión con reduce devolvía "C".
```
