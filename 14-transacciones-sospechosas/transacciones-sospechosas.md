## 💳 Reto: Transacciones sospechosas

En una fintech que procesa pagos, querés detectar comportamientos sospechosos de usuarios. Se considera sospechoso si un usuario hace más de 3 transacciones en menos de 1 minuto.

Implementa la función `usuariosSospechosos` que reciba:

Un array de transacciones: `{ userId: string, timestamp: number }`

La función debe devolver un array con los `userId` que tengan al menos una secuencia de más de 3 transacciones en un rango de 60 segundos o menos.

Reglas:

Las transacciones no vienen ordenadas.

Un usuario puede aparecer varias veces en el resultado, pero devolvelo una sola vez.

No importa cuántas secuencias sospechosas tenga: si tiene una, ya es sospechoso.

```js
const transacciones = [
  { userId: 'a', timestamp: 100 },
  { userId: 'a', timestamp: 130 },
  { userId: 'a', timestamp: 150 },
  { userId: 'a', timestamp: 160 },
  { userId: 'b', timestamp: 200 },
  { userId: 'b', timestamp: 300 },
  { userId: 'b', timestamp: 400 },
  { userId: 'c', timestamp: 500 },
  { userId: 'c', timestamp: 501 },
  { userId: 'c', timestamp: 502 },
  { userId: 'c', timestamp: 503 },
  { userId: 'd', timestamp: 1000 },
]

usuariosSospechosos(transacciones)
// ➞ ['a', 'c']
```

## Solución:

```js
function usuariosSospechosos(transacciones) {
  const transaccionesUsuario = new Map();
  const sospechosos = [];
  const UMBRAL_TRANS = 3;
  const VENTANA_SEG = 60;

  for (const { userId, timestamp } of transacciones) {
    const lista = transaccionesUsuario.get(userId) ?? [];
    lista.push(timestamp);
    transaccionesUsuario.set(userId, lista);
  }

  for (const [userId, tiempos] of transaccionesUsuario) {
    tiempos.sort((a, b) => a - b);
    const sospechoso = tiempos.some((t, i) => {
      return (i + UMBRAL_TRANS < tiempos.length) && (tiempos[i + UMBRAL_TRANS] - t <= VENTANA_SEG);
    });
    if (sospechoso) sospechosos.push(userId);
  }

  return sospechosos;
}
```

## Calificación: 95/100

### Fortalezas
1. Agrupa las transacciones por usuario con un `Map`, lo que mantiene la búsqueda por `userId` en tiempo constante.
2. Ordena los timestamps antes de buscar la ventana, por lo que funciona aunque las transacciones lleguen desordenadas.
3. La condición detecta correctamente 4 o más transacciones dentro de 60 segundos (más de 3), con el límite inclusivo como pide el enunciado.
4. Cada `userId` se agrega una sola vez al resultado, y el orden de salida sigue la primera aparición en el input.
5. Usa `const` y constantes con nombre (`UMBRAL_TRANS`, `VENTANA_SEG`) en lugar de números mágicos.
