const delay = (ms = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, ms);
  });
};

async function solve() {
  console.log(1);

  await delay(2000);

  console.log(3);
}

solve();

// 0   - 90 => res or (rej)

// Promise -> resolve, reject, pending
