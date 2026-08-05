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

  for (const fruta of entrada) {
    pila.push(fruta);
  }

  let puntero = 0;

  while (pila.length > 0 && pila[pila.length - 1] === salida[puntero]) {
    pila.pop();
    puntero++;
  }

  return pila.length === 0;
}

 ```

## Calificación: 62/100
### Problemas
1. El código contiene una sentencia 'import' fuera de la función, lo cual viola la regla de 'Single non-exported function'.

### Fortalezas
1. El código es limpio, legible y utiliza estructuras de datos adecuadas (Array como pila).

### Debilidades
1. La lógica implementada es incorrecta para el problema de validación de pila (Stack Permutation). El código actual intenta vaciar toda la entrada en la pila antes de comparar, lo que solo permite verificar si la salida es el reverso exacto de la entrada.
2. El algoritmo no permite intercalar operaciones de 'push' y 'pop' según sea necesario para validar secuencias más complejas.

### Próximos pasos
1. Elimina la sentencia 'import' para cumplir con las reglas de la evaluación.
2. Refactoriza el algoritmo para que, mientras recorres la entrada, puedas realizar operaciones de 'pop' en la pila cada vez que el elemento superior coincida con el elemento actual de la salida.
3. Asegúrate de que el puntero de salida avance correctamente durante el proceso de empacado.