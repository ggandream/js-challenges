## 🔤 Reto: Anagramas

Dado un par de palabras, debemos determinar si son anagramas entre sí. Dos palabras son anagramas si contienen las mismas letras en la misma cantidad, pero en cualquier orden.

Por ejemplo:

- `cinema` y `iceman` son anagramas.
- `hello` y `world` no son anagramas.

## 📌 Instrucciones:

- Crear una función que reciba dos cadenas de texto.
- La función debe devolver `true` si las palabras son anagramas y `false` si no lo son.
- La comparación debe ser insensible a mayúsculas y minúsculas.

Ejemplos:

```js
esAnagrama('cinema', 'iceman') // true
esAnagrama('hello', 'world') // false
esAnagrama('Listen', 'Silent') // true
esAnagrama('evil', 'vile') // true
```

## 💡 Consideraciones:

- Las palabras pueden tener diferentes longitudes, pero solo serán anagramas si las letras y la cantidad de cada letra coinciden.
- Puedes asumir que no habrá caracteres especiales (solo letras).

## Solución:

```js
function esAnagrama(primeraPalabra, segundaPalabra) {
  if (primeraPalabra.length !== segundaPalabra.length) return false;

  const palabra1 = Array.from(primeraPalabra.toLowerCase()).sort();
  const palabra2 = Array.from(segundaPalabra.toLowerCase()).sort();

  return palabra1.every((letra, i) => letra === palabra2[i]);
}
```

## Calificación: 94/100

### Fortalezas:
1. La solución es concisa, legible y utiliza métodos de array modernos de forma efectiva.
2. El manejo de la insensibilidad a mayúsculas y minúsculas es correcto.

### Debilidades
1. El uso de `.sort()` tiene una complejidad temporal de O(n log n), lo cual es eficiente para cadenas cortas, pero podría optimizarse a O(n) utilizando un mapa de frecuencias (hash map) si se tratara de volúmenes de datos muy grandes.

### Próximos pasos
1. La implementación actual es excelente para el caso de uso propuesto. No se requieren cambios urgentes.