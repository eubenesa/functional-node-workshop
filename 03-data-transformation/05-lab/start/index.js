const peaks = [
  {
    name: "Ralston",
    elevation: 9239,
    wilderness: "Desolation",
  },
  {
    name: "Needle",
    elevation: 8971,
    wilderness: "Granite Chief",
  },
  {
    name: "Tallac",
    elevation: 9738,
    wilderness: "Desolation",
  },
  {
    name: "Granite Chief",
    elevation: 9006,
    wilderness: "Granite Chief",
  },
  {
    name: "Relay",
    elevation: 10338,
    wilderness: "Mt Rose",
  },
];

const elevationCombinator = (totalElevation, peak) =>
  totalElevation + peak.elevation;
const totalElevation = peaks.reduce(elevationCombinator, 0);
console.log(totalElevation);

const results = peaks.reduce((acc, peak) => {
  if (!acc[peak.wilderness]) {
    acc[peak.wilderness] = peak.name;
    return acc;
  }

  acc[peak.wilderness] = `${acc[peak.wilderness]}, ${peak.name}`;
  return acc;
}, {});

console.log(results);
