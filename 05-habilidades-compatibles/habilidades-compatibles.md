## 💼 Reto: Habilidades compatibles

Fuente: https://midu.dev/retos/30-dias-de-javascript

Estás creando un sistema de emparejamiento entre candidatos y ofertas laborales. Cada oferta publica una lista de habilidades deseadas (por ejemplo `JavaScript`, `React`, `CSS`). A su vez, cada candidato envía su CV con habilidades declaradas.

Tu objetivo es crear una función que reciba una oferta laboral y una lista de candidatos, y devuelva los IDs de los candidatos que cumplen al menos el 70% de las habilidades requeridas.

Ejemplos:

```js
const oferta = ['JavaScript', 'React', 'Node', 'CSS', 'Git']

const candidatos = [
  { id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
  { id: 'ana', skills: ['JavaScript', 'CSS', 'React', 'Node', 'Git'] },
  { id: 'leo', skills: ['HTML', 'CSS'] },
  { id: 'lu', skills: ['JavaScript', 'Node'] },
]

candidatosCompatibles(oferta, candidatos)
// ➞ ["ana", "juan"]
```

## 📌 Reglas:

- El 70% de coincidencia se calcula sobre la cantidad de habilidades de la oferta (redondear hacia abajo).
- Las habilidades no distinguen mayúsculas/minúsculas.
- No repitas candidatos.
- Ordenar el resultado alfabéticamente por ID.

## 💡 Explicación:

- Si la oferta tiene 5 habilidades requeridas, el 70% equivale a 3.5. Al redondear hacia abajo, el número mínimo de habilidades requeridas por candidato es 3.
- Si la oferta tiene 6 habilidades requeridas, el 70% equivale a 4.2. Al redondear hacia abajo, el número mínimo de habilidades requeridas por candidato es 4.

Por esta razón, Ana y Juan son candidatos válidos, pero Leo no lo es. Ana y Juan tienen 3 habilidades requeridas, mientras que Leo solo tiene 2.

## Solución
```js
function candidatosCompatibles(oferta, candidatos) {

let candidatosPts = [];
const criterio = Math.floor((70 * oferta.length)/100);
let score = 0;

  candidatos.forEach(candidato => {
    
    oferta.forEach(habilidad => {

      if(candidato.skills.some( s => s.toUpperCase() === habilidad.toUpperCase())){
        score = score + 1;
      }

    })
    candidatosPts.push({id:candidato.id, score: score})
    score = 0;
  })


  return candidatosPts.filter( c => c.score >= criterio)
      .toSorted((a, b) => a.id.localeCompare(b.id))
      .map(c => c.id);
}
```
## Calificación: 91/100
### Fortalezas
1. La lógica implementada cumple correctamente con los requisitos de redondeo y comparación insensible a mayúsculas.
2. El uso de métodos funcionales como `filter`, `map` y `toSorted` hace que el flujo de datos sea claro y legible.

### Debilidades
1. La complejidad algorítmica es O(N * M * S) donde N es el número de candidatos, M el número de habilidades de la oferta y S el número de habilidades del candidato, debido al uso de `some` dentro de un bucle anidado.
2. Se podría optimizar la búsqueda de habilidades convirtiendo las habilidades del candidato a un `Set` de valores en mayúsculas para reducir la complejidad de búsqueda a O(1) por habilidad.

### Próximos pasos
1. Considera convertir `candidato.skills` a un `Set` de strings en mayúsculas antes de iterar sobre las habilidades de la oferta para mejorar el rendimiento en conjuntos de datos grandes.