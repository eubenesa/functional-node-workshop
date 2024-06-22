import { total } from "./index";

const backpack = [
  {
    name: "tent",
    weight: 5,
  },
  {
    name: "sleeping bag",
    weight: 4,
  },
  {
    name: "chair",
    weight: 2,
  },
  {
    name: "food",
    weight: 10,
  },
  {
    name: "clothes",
    weight: 3.6,
  },
  {
    name: "stove",
    weight: 1.5,
  },
];

test("total weight of backpack", () => {
  const getWeight = (item) => item.weight;
  const backpackWeights = backpack.map(getWeight);
  const result = total(backpackWeights);
  expect(result).toEqual(26.1);
});
