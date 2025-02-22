const delay = async (ms = 2) => {
  return new Promise((success, failure) => {
    setTimeout(() => {
      console.log(2);
      success();
    }, 1000 * ms);
  });
};

async function solve() {
  console.log(1);

  await delay();

  console.log(3);
}

solve();
