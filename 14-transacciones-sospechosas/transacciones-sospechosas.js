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