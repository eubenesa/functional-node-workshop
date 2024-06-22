// immutability

let colorLawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};

function rateColor(color, rating) {
  // color.rating = rating;
  // return color;
  return {
    ...color,
    rating,
  };
}

console.log(rateColor(colorLawn, 5).rating);
console.log(colorLawn.rating);

// pure functions (same input, same output)

const jennifer = {
  name: "Jennifer Wilson",
  canSki: false,
  canSnowboard: false,
};

function selfTeach(person) {
  // jennifer.canSki = true;
  // jennifer.canSnowboard = true;
  // return jennifer;
  return {
    ...person,
    canSki: true,
    canSnowboard: true,
  };
}
// selfTeach();
console.log(selfTeach(jennifer));
console.log(jennifer);

// higher order functions

const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("welcome!");
const showUnauthorized = () => console.log("unauthorized");

invokeIf(true, showWelcome, showUnauthorized);

// recursion

const countdown = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0
    ? setTimeout(() => countdown(value - 1, fn, delay), delay)
    : value;
};

const log = (value) => console.log(value);
countdown(10, log);
