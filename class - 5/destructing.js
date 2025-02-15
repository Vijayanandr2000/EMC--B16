let arr = [1, 2, 3, 4];

let [vijay, b, c, d, e] = arr;

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

console.log({
  vijay,
  b,
  c,
  d,
  e,
});

let obj = {
  name: "vijay",
  age: 25,
};

let { name: kishore, age, city = "chennai" } = obj;

console.log({
  kishore,
  age,
  city,
});
