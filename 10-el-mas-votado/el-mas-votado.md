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
  const conteo = [];
  let maxVotos = 0;
  let ganador;

  const participantes = new Set(votos);

  Array.from(participantes).map((participante) => {
    let contador = 0;

    votos.forEach((voto) => {
      if (participante === voto) {
        contador++;
      }
    });

    conteo.push({ candidato: participante, votos: contador });

    return conteo;
  });

  conteo.map((conteo) => {
    if (maxVotos < conteo.votos) {
      maxVotos = conteo.votos;
      ganador = conteo.candidato;
    } else if (maxVotos === conteo.votos) {
      maxVotos = conteo.votos;
      ganador = conteo.candidato;
    }
  });

  return ganador;
}
```

## Calificación: 76/100

### Fortalezas
1. El código es legible y sigue una estructura lógica clara.
2. La lógica para manejar el empate cumple con el requisito de devolver el último participante encontrado.

### Debilidades
1. La complejidad algorítmica es subóptima (O(n · m), donde n es el número de votos y m el número de participantes únicos).
2. El uso de `.map()` para realizar efectos secundarios (modificar el array `conteo`) es una mala práctica en JavaScript; se debería usar `.forEach()` o un bucle `for...of` para iteraciones sin retorno.
3. La lógica de desempate es incorrecta según el enunciado: el código devuelve el último participante del array `conteo` (que sigue el orden del `Set`, es decir, el de **primera** aparición), no el que aparece último en `votos`. Los tres ejemplos pasan por casualidad, pero falla aquí:

```js
participanteConMasVotos(['A', 'B', 'A', 'B', 'B', 'A'])
// devuelve "B", pero debería ser "A":
// ambos empatan a 3 votos y la última aparición de A (índice 5)
// es posterior a la de B (índice 4).
```

### Próximos pasos
1. Sustituye los dos `.map()` por `.forEach()` (o `for...of`): en ninguno de los dos se usa el array que devuelven.
2. Cuenta los votos en un solo recorrido con un `Map` —`conteo.set(voto, (conteo.get(voto) ?? 0) + 1)`— y baja de O(n · m) a O(n), eliminando de paso el `Set` y el bucle anidado.
3. Arregla el desempate recorriendo `votos` en su orden original y actualizando al ganador cuando el conteo acumulado sea mayor **o igual** que el máximo: así el último voto del empate es el que manda, que es justo lo que pide el enunciado.
