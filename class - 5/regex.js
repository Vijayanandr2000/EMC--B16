function isValidEmail(email) {
  let regexEmailCheck = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  return regexEmailCheck.test(email);
}

console.log(isValidEmail("abc@gmail.com"));
console.log(isValidEmail("abc-gmail"));
console.log(isValidEmail("abd@gmail"));
console.log(isValidEmail("abc@.com"));

const regex = /(hello) (world)/;
const word = "hello world";
const match = word.match(regex);
console.log(match);
