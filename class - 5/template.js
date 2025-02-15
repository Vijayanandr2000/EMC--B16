let name = "vijay";
let day = 2;
let date = "week";

let res = "hello, " + name + " " + day + " wonderfull session " + date;

let resTemp = `hello, ${name} 

${day} wonderfull session ${date}`;

console.log({
  res,
  resTemp,
});
console.log(resTemp);
