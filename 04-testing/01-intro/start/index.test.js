import { total } from "./index";

test("total weight of backpack", () => {
  const backpack = [5, 2, 3, 10, 3, 1];
  const result = total(backpack);
  expect(result).toEqual(24);
});
