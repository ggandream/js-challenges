## 📚 Reto: Conflictos de edición en tiempo real

En una app colaborativa de edición de texto, múltiples usuarios pueden editar el mismo documento al mismo tiempo. Para mantener consistencia, el sistema guarda cada cambio con una estructura así:

Formato: 
```js
{
  user: "ana",
  op: "insert" | "delete",
  index: 4,
  text: "abc" // solo si es un insert
}
```

Tu misión es implementar una función `resolverConflictos` que tome dos arrays con los cambios hechos por dos usuarios diferentes y devuelva el estado final del texto asumiendo que:

- El texto inicial es una cadena vacía `""`.
- Se aplican primero todas las operaciones del primer array (en orden).


Luego, se aplican las del segundo array, pero:

- Si una operación apunta a un índice fuera del texto actual, se ignora.
- En el caso de insert, si el índice es válido, se inserta el texto (desplazando lo demás).
- En el caso de delete, se borra un carácter en el índice dado si existe.

Ejemplo:
```js

const cambiosA = [
  { user: 'ana', op: 'insert', index: 0, text: 'Hola' },
  { user: 'ana', op: 'insert', index: 4, text: ' mundo' },
]
 
const cambiosB = [
  { user: 'luis', op: 'delete', index: 4 },
  { user: 'luis', op: 'insert', index: 4, text: 'Mundo cruel' },
]
 
resolverConflictos(cambiosA, cambiosB)
// => "HolaMundo cruelmundo"

```

## 📌 Reglas:
- El texto comienza vacío.
- Los índices son relativos al estado actual del texto en ese momento.
- No se validan índices negativos ni tipos incorrectos.
- No modificar los arrays originales.

## Solución: 
```js

function resolverConflictos(firstUserChanges, secondUserChanges) {
  let texto = '';
  let cadena1 = '';
  let cadena2 = '';
  let cambiosUsuario = [ ...firstUserChanges, ...secondUserChanges ];

  let i = 0;

  while(i < cambiosUsuario.length){
    
    switch (cambiosUsuario[ i ].op) {
      case 'insert':
        if (cambiosUsuario[i].index > texto.length) break;  
        
        cadena1 = texto.substring(0, cambiosUsuario[ i ].index);
        cadena2 = texto.substring(cambiosUsuario[ i ].index);
        texto = cadena1 + cambiosUsuario[ i ].text + cadena2;

        break;

      case 'delete':

        if (cambiosUsuario[ i ].index >= texto.length) break;  

        cadena1 = texto.substring(0, cambiosUsuario[ i ].index);
        cadena2 = texto.substring(cambiosUsuario[ i ].index + 1);
        texto = cadena1 + cadena2;

        break;
    }

    i++;
  }

  return texto;
}

```
## Calificación: 91/100

### Fortalezas
1. La lógica implementada sigue correctamente el flujo de operaciones secuenciales.
2. El uso de `substring` para manipular el texto es claro y efectivo para este caso de uso.
3. Código limpio y fácil de seguir.

### Debilidades
1. La lógica de validación para 'insert' permite insertar en `index === texto.length`, lo cual es correcto, pero la condición `cambiosUsuario[i].index > texto.length` es adecuada. Sin embargo, el manejo de índices en 'delete' podría ser más robusto.
2. Se crean variables innecesarias (`cadena1`, `cadena2`) fuera del ámbito del `switch`, lo cual es un poco redundante.

### Próximos pasos
1. Considera declarar las variables `cadena1` y `cadena2` dentro del `switch` o usar `slice` directamente en la concatenación para reducir el ruido visual.
2. Aunque el código funciona, podrías usar un bucle `for...of` en lugar de `while` con un contador manual para mejorar la legibilidad y evitar errores de índice.