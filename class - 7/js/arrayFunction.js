let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //= 55

arr.push(11);
arr.pop();

arr.unshift(0);
arr.shift();

arr.splice(3, 0);
// arr.splice(3, 0, 4.1, 4.2);
let slicedVar = arr.slice(2);

console.log(arr);
console.log(slicedVar);

const multOf3 = arr.reduce((sum, curr) => sum + curr, 0);
console.log(multOf3);
const filterEven = arr.filter((curr, idx) => curr % 2 === 0);
console.log(filterEven);
