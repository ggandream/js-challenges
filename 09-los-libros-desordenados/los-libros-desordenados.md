## 📚 Reto: Los libros desordenados

El bibliotecario Don Biblio está reorganizando la gran biblioteca de la ciudad. Cada libro tiene una posición específica donde debe colocarse, pero por un error del sistema… ¡los libros están completamente desordenados! 😱

El programa recibe dos listas:

- Una con los títulos de los libros (por ejemplo: `['Aprende lo Último de JavaScript', 'Aprende Git y GitHub', 'Cocina']`).
- Y otra con las posiciones de la estantería donde deben ir (como `[2, 0, 1]`).

Tu tarea es ayudar a Don Biblio a colocarlos correctamente según sus posiciones.

## ⚙️ ¿Cómo funciona?

Cada libro tiene una posición única en la estantería, pero las posiciones:

- No necesariamente comienzan en 0 (podrían empezar en 5, 12, etc.).
- Siempre son números consecutivos y en orden ascendente.

Tu función debe devolver un array con los libros en el orden correcto, como si los estuvieras colocando en la estantería desde la posición más baja a la más alta.

Ejemplos:

```js
const libros = ['Ajedrez', 'Poesía', 'Geografía', 'Física']
const posiciones = [2, 3, 1, 0]

organizarEstanteria(libros, posiciones)
// ['Física', 'Geografía', 'Ajedrez', 'Poesía']

const librosRaros = ['Dragones', 'Hechizos', 'Brujería', 'Alquimia', 'Pociones']
const posicionesRaras = [8, 6, 5, 7, 9]

organizarEstanteria(librosRaros, posicionesRaras)
// ['Brujería', 'Hechizos', 'Alquimia', 'Dragones', 'Pociones']
```

## 📌 Reglas:

- Siempre habrá el mismo número de libros y de posiciones.
- Ningún libro ni ninguna posición se repite.
- Las posiciones pueden empezar en cualquier número, pero siempre serán consecutivas.

## Solución 1: emparejar y ordenar

```js
function organizarEstanteria1(libros, posiciones) {
  const librosPosiciones = libros.map((libro, i) => [posiciones[i], libro]);
  const resultado = librosPosiciones
    .sort(([a], [c]) => a - c)
    .map(([k, v]) => v);

  return resultado;
}
```

## Calificación: 88/100

### Fortalezas
1. El emparejamiento de cada libro con su posición mediante `map` y el posterior ordenado numérico es una estrategia correcta y fácil de seguir.
2. Se usa el comparador `(a, c) => a - c`, evitando el ordenado lexicográfico por defecto de `.sort()`, que fallaría con posiciones de dos o más dígitos (ej. `[8, 9, 10]`).
3. `map` crea un array nuevo, así que la mutación de `.sort()` no afecta a los arrays recibidos por parámetro.

### Debilidades
1. La solución es O(n log n) por el ordenado, cuando el enunciado garantiza posiciones consecutivas: restando la posición mínima se puede colocar cada libro directamente en su índice y bajar a O(n).
2. Los nombres de las variables desestructuradas (`a`, `c`, `k`, `v`) no aportan significado; `[posicion]` y `[, libro]` harían el código autoexplicativo.
3. La variable `resultado` solo guarda el valor que se devuelve en la línea siguiente; se puede retornar la cadena de métodos directamente.

### Próximos pasos
1. Aprovechar que las posiciones son consecutivas para resolverlo en un solo recorrido → **Solución 2**.
2. Renombrar las desestructuraciones a `([posicion])` y `([, libro])`, y eliminar la variable intermedia `resultado`.

## Solución 2: colocar cada libro en su índice

```js
function organizarEstanteria2(libros, posiciones) {
  let estanteria = [];
  let minimo = Math.min(...posiciones);

  for (let i = 0; i < libros.length; i++) {
    estanteria[posiciones[i] - minimo] = libros[i];
  }

  return estanteria;
}
```

## Calificación: 96/100

### Fortalezas
1. Es O(n): un único recorrido, sin ordenar. Cada libro se escribe directamente en su hueco final.
2. Normalizar con `minimo` resuelve de forma limpia que las posiciones empiecen en cualquier número, incluso negativo, sin casos especiales.
3. Los nombres (`estanteria`, `minimo`) describen el problema, y la lógica se lee de un vistazo.

### Debilidades
1. `Math.min(...posiciones)` pasa cada posición como argumento: con arrays muy grandes (del orden de 100.000 elementos) puede provocar un `Maximum call stack size exceeded`. Con `posiciones.reduce((a, b) => Math.min(a, b), Infinity)` no hay ese límite.
2. `estanteria` y `minimo` nunca se reasignan, así que `const` comunicaría mejor la intención que `let`.
3. Depende de que las posiciones sean realmente consecutivas: si hubiera un hueco, el array devuelto tendría slots vacíos en lugar de fallar de forma visible. El enunciado lo garantiza, pero conviene tenerlo presente si la función se reutiliza.

### Próximos pasos
1. Cambiar los dos `let` por `const`.
2. Si quieres una versión más declarativa del mismo algoritmo: `libros.forEach((libro, i) => { estanteria[posiciones[i] - minimo] = libro })`.
