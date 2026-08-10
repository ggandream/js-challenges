## 🖨️ Reto: ¡Atención en la imprenta!

Estamos trabajando en una imprenta que produce etiquetas con códigos numéricos para paquetes. Cada dígito del 0 al 9 se imprime con una tinta distinta, y a veces… ¡una de las tintas se acaba!

Tu tarea es escribir una función que nos diga qué etiquetas saldrán defectuosas porque contienen el dígito cuya tinta se ha agotado.

## ⚙️ ¿Cómo funciona?

La función recibe:

- Un dígito (del 0 al 9) que representa la tinta que se ha agotado.
- Un número que representa la cantidad total de etiquetas que se van a imprimir, desde 1 hasta ese número.

La función debe devolver un array con todos los números que contienen el dígito sin tinta. Esos son los códigos que saldrán mal impresos.

Ejemplos:

```js
secuenciaDeNumeros(1, 15)
// [1, 10, 11, 12, 13, 14, 15]

secuenciaDeNumeros(2, 20)
// [2, 12, 20]
```

## Solución:
```js
function secuenciaDeNumeros(tinta, codigos) { 
  let etiquetasDefectuosas = [];

  for(let i = 1; i <= codigos; i++){
    if(String(i).includes(tinta)) etiquetasDefectuosas.push(i);
  }

  return etiquetasDefectuosas }
```

## Calificación: 94/100

### Fortalezas
1. La solución es clara, concisa y utiliza métodos de JavaScript modernos de forma efectiva.
2. El uso de la conversión a cadena para verificar la presencia del dígito es una aproximación legible y correcta para este problema.

### Debilidades
1. Para números extremadamente grandes, la conversión a cadena en cada iteración podría ser menos eficiente que una solución matemática (usando módulo y división), aunque para el contexto de etiquetas es perfectamente aceptable.

### Próximos pasos
1. El código es excelente tal como está. No se requieren cambios para su funcionamiento o legibilidad.
