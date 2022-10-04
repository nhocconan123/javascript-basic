console.log("hello world ");

let sum = (a, b, callback) => {
  let tong = a + b;
  setTimeout(() => {
    callback(tong);
  }, 5000);
  let i = 0;
  let timer = setInterval(() => {
    callback(tong);
    i++;
    if (i === 5) {
      clearInterval(timer);
    }
  }, 1000);
};

let pringSum = (message) => {
  console.log("check sum: ", message);
};
sum(6, 9, pringSum);
