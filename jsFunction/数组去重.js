const data = [
  {
    name: "Kris",
    age: "24"
  },
  {
    name: "Andy",
    age: "25"
  },
  {
    name: "Kitty",
    age: "25"
  },
  {
    name: "Andy",
    age: "25"
  },
  {
    name: "Kitty",
    age: "25"
  },
  {
    name: "Andy",
    age: "25"
  },
  {
    name: "Kitty",
    age: "50"
  }
]
console.log(data.reduce((pre, cur) => {
  return {
    ...pre,
    ...cur
  }
}, {}))