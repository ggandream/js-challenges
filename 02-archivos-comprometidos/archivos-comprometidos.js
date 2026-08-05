function getCompromisedFiles(lastSafeDownload, droneLogs) {
  const logsChanged = new Set(
    droneLogs
      .filter(([logID, update]) => update > lastSafeDownload)
      .map(([logID, update]) => logID)
      .sort((a, b) => a - b),
  );

  return Array.from(new Set(logsChanged));
}

const lastSafeDownload = 1670000000;

const droneLogs = [
  [42, 1670000500],
  [13, 1670000000],
  [8, 1670000700],
  [8, 1670000001],
  [99, 1669999999],
];

getCompromisedFiles(lastSafeDownload, droneLogs); // => [8, 42]
