console.log("hello world");

let sum = (a, b) => {
  return a + b;
};
console.log("check sum", sum(9, 6));

let obj = {
  name: "huy",
  address: "thai nguyen",
  getName: function () {
    return this.name;
  },
};
console.log(">>get name obj: ", obj.getName());
//function vs method
