// let arr = [1, 2, 3, 4];

// let a = 10;
// function solve(data) {
//   data.push(10);
//   console.log("2", data);
// }

// console.log("1", arr);
// solve(arr);
// console.log("3", arr);

// // call by value
// //     a = 10

// // call by reference

let obj = {
  name: "vijay",
};

function solve(data) {
  console.log("2", data.age);
  data.place = "chennai";
}

let a = 10; //function

console.log("1", obj);
solve(obj);
console.log("3", obj);
console.log("4", obj.author);
console.log("3", obj.data); //undefined
obj.data = 10; // 10
console.log("3", obj.data); // 10

// let a = {};
// console.log(a.name);

// [10]

// let a = [10];
// console.log(a[0]);
// a[5] = 10;
// a[10] = 20;
// console.log(a[3]);

// [10,,,,,10,,,,,20]

// obj = {
//     name:
//     age: undefined,
//     author: undefined
// }

console.log(console.vijay);

// data = {
//   call: () => {
//     console.log("I am a function");
//   },
// };

// data.call();
