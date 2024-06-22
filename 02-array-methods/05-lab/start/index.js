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

const over10k = (peak) => peak.elevation > 10000;
const under5k = (peak) => peak.elevation < 5000;

const someOver10k = peaks.some(over10k);
const someUnder5k = peaks.some(under5k);
const peaksOver10k = peaks.filter(over10k);
console.log(someOver10k);
console.log(someUnder5k);
console.log(peaksOver10k);

const findPeak = (name) => (peak) => peak.name === name;
const relay = peaks.find(findPeak("Relay"));
console.log(relay);

const findPeakElevation = (over, elevation) => (peak) =>
  over ? peak.elevation > elevation : peak.elevation < elevation;

const everyPeakOver5k = peaks.every(findPeakElevation(true, 5000));
console.log(everyPeakOver5k);

const peaksOver9500 = peaks.filter(findPeakElevation(true, 9500));
console.log(peaksOver9500);
