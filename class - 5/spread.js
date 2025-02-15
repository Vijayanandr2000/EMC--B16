const arr = [1, 2, 3];

const arr1 = [...arr, 4, 5, 6];

// [1,2,3,4,5,6]

const res = arr.concat(arr1);

console.log(arr1);

let data = [1, 2, 3, 4, 5, 6];

let [a, b, c, ...d] = data;

console.log(a, b, c, d);
