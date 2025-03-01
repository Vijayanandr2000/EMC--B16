//

function print() {
  setTimeout(() => {
    console.log(2);
  }, 5000);
}

console.log(1);
print();
console.log(3);
