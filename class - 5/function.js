let obj = {
  name: "vijay",
  greet: function () {
    // console.log(this);
    console.log(arguments);
  },
  greet1: function () {
    return () => {
      console.log(this);
    };
  },
  greet2: () => {
    // console.log(this);
    console.log(arguments);
  },
};

// obj.greet(1, 2);
// obj.greet1()();
// obj.greet2(1, 2);

const demo = (a, b) => {
  console.log(a, b);
};
function demo1() {
  console.log(arguments);
}

// demo(1, 2);
// demo1(1, 2);

function sum(arr, userInput = 0) {
  //default paramater
  let count = userInput;

  // count += arr;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }

  console.log(count);
}

sum([1, 2, 4]);

// 0 + [1, 2, 3];

"0" + "1,2,4";
("01,2,4");

// undefined + 1 => NaN
