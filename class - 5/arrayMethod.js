let a = [];

//add/remove
a.push(1);
a.push(2);
a.push(3);

console.log(a);

const lastEle = a.pop();

console.log(a, lastEle);

a.unshift(0);

console.log(a);

const firstEle = a.shift();

console.log(a, firstEle);

let b = [1, 2, 3, 4, 5, 6, 7];

b.splice(1, 3, 8, 9, 110);

// splice(idx, removeTime(), ...firstEle.addelement,)

console.log(b);
