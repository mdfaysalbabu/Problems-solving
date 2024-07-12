type TPerson = {
  name: string;
  age: number;
  gender: "male" | "female";
};
const persons: TPerson[] = [
  {
    name: "Faysal",
    age: 21,
    gender: "male",
  },
  {
    name: "Babu",
    age: 23,
    gender: "female",
  },
  {
    name: "Arif",
    age: 26,
    gender: "male",
  },
  {
    name: "Mim",
    age: 22,
    gender: "female",
  },
  {
    name: "David Brown",
    age: 24,
    gender: "male",
  },
  {
    name: "Nadia",
    age: 25,
    gender: "female",
  },
  {
    name: "Dani",
    age: 27,
    gender: "male",
  },
  {
    name: "Faruk",
    age: 28,
    gender: "female",
  },
  {
    name: "Fahim",
    age: 29,
    gender: "male",
  },
  {
    name: "Lopez",
    age: 30,
    gender: "female",
  },
  {
    name: "Faruj",
    age: 31,
    gender: "male",
  },
  {
    name: "Alexander Davis",
    age: 28,
    gender: "male",
  },
  {
    name: "Monu",
    age: 23,
    gender: "male",
  },
];

const filterOutPersons = (persons: TPerson[]): string[] => {
  const femalePersons = persons.filter((person) => person.gender === "female");
  const remainingPersons = persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
  return remainingPersons;
};

console.log(filterOutPersons(persons));