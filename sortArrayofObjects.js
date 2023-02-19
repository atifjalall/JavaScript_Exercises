//sort array of objects with property name

let sotedObjects = (obj) => {
  let sorted;
  return (sorted = obj.sort((a, b) => b.name.localeCompare(a.name)));
};

let data = [
  {
    id: 1,
    name: "atif",
    age: 24,
  },
  {
    id: 2,
    name: "bareera",
    age: 24,
  },
  {
    id: 3,
    name: "zohaib",
    age: 21,
  },
];

console.log(sotedObjects(data));
