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
  const conteo = new Map();
  let maxVotos = 0;
  let candidatoElecto;

  votos.forEach((candidato) => {
    conteo.set(candidato, counter(votos, candidato));
  })

  for (const [candidato, votos ] of conteo) {
    if(votos > maxVotos){
      maxVotos = votos;
      candidatoElecto = candidato;
    }

    if(votos === maxVotos){
      maxVotos = votos;
      candidatoElecto = candidato;
    }
  }
  
  return candidatoElecto;
}

function counter(array, specialItem) {
  let i = 0;
  array.forEach((item) => {
    if(item == specialItem){
      i++;
    }
  })
  return i;
}
```

## Calificación: 48/100

Hay un incumplimiento importante que conviene revisar antes de continuar.

### Problemas
1. El código contiene más de una función, violando la regla de *Single non-exported function*.

### Fortalezas
1. La lógica básica para contar votos utilizando un `Map` es un buen punto de partida.

### Debilidades
1. Violación de la regla de función única: el código incluye una función auxiliar `counter` fuera de la función principal.
2. Ineficiencia algorítmica: la función `counter` se llama dentro de un bucle, lo que resulta en una complejidad de O(n²).
3. Lógica de desempate incorrecta: el bucle actual no garantiza que se devuelva el candidato que aparece último en el array original en caso de empate.

### Próximos pasos
1. Integra toda la lógica dentro de una sola función.
2. Optimiza el conteo de votos recorriendo el array una sola vez (O(n)) en lugar de llamar a una función de conteo repetidamente.
3. Para resolver el desempate correctamente, registra el índice de la última aparición o actualiza el ganador basándote en el orden de procesamiento del array.
