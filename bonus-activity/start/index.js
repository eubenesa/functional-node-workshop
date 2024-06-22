import fetch from "node-fetch";

const loadPets = async () => {
  try {
    const response = await fetch("http://pet-library.moonhighway.com/api/pets");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  const pets = await loadPets();
  // console.log(pets);

  const isCat = (pet) => pet.category === "CAT";

  const cats = pets.filter(isCat);
  // console.log(cats);

  const totalPopulation = (acc, pet) => acc + 1;
  const totalNumberOfPets = pets.reduce(totalPopulation, 0);
  // console.log(totalNumberOfPets);

  const isDog = (pet) => pet.category === "DOG";
  const totalNumberOfCats = (p) => p.filter(isCat).reduce(totalPopulation, 0);
  const totalNumberOfDogs = (p) => p.filter(isDog).reduce(totalPopulation, 0);
  // console.log(totalNumberOfCats(pets), totalNumberOfDogs(pets));

  // console.log(
  //   totalNumberOfPets - totalNumberOfCats(pets) - totalNumberOfDogs(pets)
  // );

  const totalWeight = (acc, pet) => acc + pet.weight;
  const totalWeightOfPets = pets.reduce(totalWeight, 0);
  console.log(totalWeightOfPets);
};

main();
