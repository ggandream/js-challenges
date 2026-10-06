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