const schools = {
  Indiana: 10947,
  Michigan: 15558,
  Wisconsin: 10725,
};

const schoolArray = Object.keys(schools).map((key) => ({
  name: key,
  tuition: schools[key],
}));

console.log(schoolArray);

const ages = [21, 18, 42, 40, 64, 63, 34];
const ageComparator = (max, age) => (age > max ? age : max);
const maxAge = ages.reduce(ageComparator, 0);
console.log(maxAge);
