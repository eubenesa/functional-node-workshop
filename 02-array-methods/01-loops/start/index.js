const inventory = [
  {
    name: "Powder Skis",
    price: 999,
    type: "equipment",
    inStock: 7,
  },
  {
    name: "Warm Hoodie",
    price: 50,
    type: "clothes",
    inStock: 15,
  },
  {
    name: "Crampons",
    price: 199,
    type: "equipment",
    inStock: 2,
  },
  {
    name: "Avalanche Level One",
    price: 599,
    type: "course",
    inStock: 100,
  },
  {
    name: "Avalanche Level Two",
    price: 599,
    type: "course",
    inStock: 100,
  },
  {
    name: "Hat",
    price: 5,
    type: "clothes",
    inStock: 4,
  },
];

function looper(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}

looper(inventory, (item, i) => {
  console.log(`${i}: ${item.name} $${item.price}`);
});

// predicate
const under100 = (item) => item.price < 100;

let results = inventory.every(under100);
console.log(results);
let someItems = inventory.some(under100);
console.log(someItems);
let filtered = inventory.filter(under100);
console.log(filtered);

const findAvOne = (item) => item.name === "Avalanche Level One";
console.log(inventory.find(findAvOne));

const findByName = (name) => (item) => item.name === name;
console.log(inventory.find(findByName("Warm Hoodie")));
console.log(inventory.find(findByName("Hat")));
