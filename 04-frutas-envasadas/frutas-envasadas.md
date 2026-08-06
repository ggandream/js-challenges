## 🧃 Reto: Frutas envasadas

Fuente: https://midu.dev/retos/30-dias-de-javascript

En la fábrica de jugos Frutópolis, los robots empacadores reciben frutas en una cinta transportadora. Por reglas de seguridad, las frutas deben entrar y salir en un orden específico: la última fruta que entra debe ser la primera en salir.

Tu misión es ayudar a verificar si una secuencia de salida es posible, dadas las frutas que entraron. Implementa la función `frutaEmpacadaCorrectamente` que reciba dos arrays: `entrada` (el orden en el que las frutas llegaron) y `salida` (el orden en el que las frutas se empacaron), y devuelva `true` si la secuencia de salida es válida, o `false` si no se puede lograr respetando el orden de apilado.

Ejemplos:

```js
frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['kiwi', 'banana', 'manzana']
)
// true → se empacaron en orden LIFO

frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['banana', 'kiwi', 'manzana']
)
// false → no se puede obtener así desde una pila
```

## 📌 Reglas:

- Las frutas son strings únicos, sin repetir.
- Solo se puede usar una pila para empacar.
- Devuelve `true` si la salida es posible, `false` si no.


## Solución: 

 ```js
function frutaEmpacadaCorrectamente(entrada, salida) {
  let pila = [];
  let puntero = 0;

  for (const fruta of entrada) {
    pila.push(fruta);

    if (pila.length === entrada.length) {
      while (pila.length > 0 && pila[pila.length - 1] === salida[puntero]) {
        pila.pop();
        puntero++;
      }
    }
  }

  return pila.length === 0 && puntero === salida.length;
}


 ```

## Calificación: 81/100
### Fortalezas
1. Uso correcto de una estructura de datos tipo pila (LIFO) para resolver el problema.
2. Código limpio, legible y con una estructura lógica clara.

### Debilidades
1. La lógica actual es incorrecta para casos donde la salida requiere vaciar la pila antes de procesar todas las entradas (ej. entrada ['A', 'B'], salida ['B', 'A'] debería ser true, pero tu código fallará).
2. El bucle principal fuerza el ingreso de todos los elementos antes de intentar vaciar la pila, lo cual no permite la intercalación de operaciones de push y pop.

### Próximos pasos
1. Modifica el algoritmo para que, dentro del bucle de entrada, intentes hacer 'pop' de la pila cada vez que el elemento superior coincida con el elemento actual de la salida.
2. Asegúrate de que el puntero de salida avance correctamente mientras la pila coincida con la secuencia esperada.