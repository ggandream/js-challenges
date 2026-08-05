## 🧙 El códice de Arkanus

Naira, una aprendiz de hechicera, ha encontrado un antiguo códice en las ruinas de Arkanus. Este códice está lleno de símbolos arcanos que, según los manuscritos, ocultan un poderoso conjuro olvidado. Para descifrar el conjuro, debe interpretar correctamente los símbolos según un antiguo sistema numérico mágico.

Estos son los símbolos conocidos y sus equivalencias:

| Símbolo | Valor |
| --- | ---: |
| ☽ | 1 |
| ☾ | 5 |
| ♁ | 10 |
| ⚕ | 50 |
| ⚡ | 100 |

**Pero cuidado**: la energía mágica es caprichosa. Si un símbolo de menor valor aparece justo antes que uno de mayor valor, su energía se resta en lugar de sumarse.

Debes crear una función que reciba una cadena con los símbolos y retorne su valor numérico total. Si encuentras un símbolo desconocido, el conjuro se corrompe, y la función debe devolver `NaN`.

### Ejemplos

```js
decodeSpell('☽☽☽') // 3
decodeSpell('☽☾') // 4 (5 - 1)
decodeSpell('☾☽') // 6 (5 + 1)
decodeSpell('☾☽☽☽') // 8 (5 + 3)
decodeSpell('☽☽☽⚡') // 101 (1 + 1 + (100 - 1))
decodeSpell('☽⚕') // 49 (50 - 1)
decodeSpell('☽☽☾') // 5 (1 + (5 - 1))
decodeSpell('☽☽☾⚡') // 95 (1 + (-1 + (100 - 5)))
decodeSpell('⚡⚡⚡') // 300
decodeSpell('⚕⚡') // 50
decodeSpell('⚕.♒') // NaN
```

## Solución
```js
function decodeSpell(spell) {
  let num = [];
  let sigNum = 0;

  for (let i = 0; i < spell.length; i++) {
    switch (spell[i]) {
      case '☽':
        num.push(1);
        break;

      case '☾':
        num.push(5);
        break;

      case '♁':
        num.push(10);
        break;

      case '⚕':
        num.push(50);
        break;

      case '⚡':
        num.push(100);
        break;

      default:
        num.push(NaN);

    }
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] === undefined) {
      sigNum = 0;
    } else {
      sigNum = num[i + 1];
    }
    if (num[i] < sigNum) {
      num[i] = -num[i];
    }
  }

  return num.reduce((accumulator, currentNum) => {
    return accumulator + currentNum
  }, 0)

}
```

## Calificación: 92/100
### Fortalezas
1. La lógica implementada maneja correctamente la regla de resta para símbolos menores seguidos de mayores.
2. El uso de un array intermedio para almacenar los valores facilita la lógica de comparación posterior.
3. El código es limpio, legible y sigue una estructura lógica clara.

### Debilidades
1. El uso de dos bucles separados y un array intermedio aumenta ligeramente el uso de memoria (O(n) espacio adicional).
2. La lógica de `num[i + 1] === undefined` es funcional, pero podría simplificarse.

### Próximos pasos
1. Podrías optimizar el rendimiento procesando la cadena en una sola pasada (O(n) tiempo y O(1) espacio) comparando el valor actual con el siguiente sin necesidad de crear un array intermedio.
2. Considera usar un objeto de mapeo (diccionario) en lugar de una sentencia `switch` para mejorar la legibilidad y reducir la longitud del código.