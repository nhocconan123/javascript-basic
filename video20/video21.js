console.log("hello world");
//Filter/Find Tim phan tu ban muon
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
  { name: "huy", age: 25 },
  { name: "duong", age: 24 },
  { name: "dinh", age: 26 },
  { name: "linh", age: 25 },
];
// for (x of arr) {
//   console.log(arr[x - 1]);
// }

let filter = arr.filter((item, index) => {
  //   console.log(">>>check fileter: item :", item, "index: ", index);
  return item && item.age === 25;
});
let find = arr.find((item, index) => {
  return item && item.age === 25;
});
console.log(filter);
console.log(find);
