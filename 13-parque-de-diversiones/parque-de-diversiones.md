## 🎢 Reto: Organizando la fila del parque de diversiones

El nuevo parque de diversiones de Robot-Landia ha implementado un sistema automatizado para organizar las filas. A cada visitante se le asigna un número (su nivel de energía). Los robots de la entrada quieren organizar la fila para que nadie con menos energía esté delante de alguien con más energía en el mismo grupo.

Se permiten dividir a los visitantes en grupos consecutivos, pero el orden dentro de cada grupo debe ser estrictamente creciente.

Tu trabajo es calcular el mínimo número de grupos que los robots deben formar para cumplir esta regla.

```js
const energyLevels = [5, 1, 2, 6]
groupVisitors(energyLevels) // → 2

// Se pueden agrupar como:
// Grupo 1: [5, 6]
// Grupo 2: [1, 2]
```

Observaciones:

Si hay energías con el mismo valor, se deben agrupar en grupos distintos.

## Solución:

```js
function groupVisitors(energyLevels) {
  const ultimoNivelPorGrupo = [];

  for (const energy of energyLevels) {
    // busqueda binaria: primer grupo del cual el ultimo nivel sea menor que el del actual
    let inicio = 0;
    let fin = ultimoNivelPorGrupo.length;

    while (inicio < fin) {
      const mitad = Math.floor((inicio + fin) / 2);
      if (ultimoNivelPorGrupo[mitad] < energy) {
        fin = mitad;
      } else {
        inicio = mitad + 1;
      }
    }

    //crear nuevo indice o reasignar indice con ultimo con mas energia
    ultimoNivelPorGrupo[inicio] = energy;
  }
  return ultimoNivelPorGrupo.length;
}
```

## Calificación: 94/100

### Fortalezas
1. La solución es correcta: mantiene los últimos niveles de cada grupo en orden decreciente y usa búsqueda binaria para asignar cada visitante al grupo adecuado.
2. La complejidad temporal es O(n log n) y la espacial O(n), adecuada para este problema.
3. Maneja correctamente los casos de valores repetidos, que deben ir en grupos distintos, y la entrada vacía.
4. Usa `const` y `let`, sin `var`, y el flujo es lineal y fácil de seguir.

### Debilidades
1. El comentario de la línea que crea o reasigna el índice no tiene espacio después de `//`, lo que es inconsistente con el resto de comentarios.

### Próximos pasos
1. Unificar el formato de los comentarios añadiendo un espacio después de `//`.
