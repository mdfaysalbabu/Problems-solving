type People = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const peoples: People[] = [
  {
    name: "Faysal",
    age: 20,
    gender: "male",
  },
  {
    name: "Mim",
    age: 22,
    gender: "female",
  },
  {
    name: "Fahim",
    age: 25,
    gender: "male",
  },
];

const modifyAgeByName = (
  peoples: People[],
  name: string,
  newAge: number
): People[] | string => {
  const personIndex = peoples.findIndex((person) => person.name === name);

  if (personIndex !== -1) {
  
    peoples[personIndex].age = newAge;
    return peoples;
  } else {
    return "People not found";
  }
};

console.log(modifyAgeByName(peoples, "Sadia Khan", 23));
