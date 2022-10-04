console.log("hello wolrd ");
let a = "1$2$3$4";
alert(a.split("$"));
let b = 5;

//object: la 1 doi tuong key :value giong set python
let obj = {
  name: "huy",
  age: 24,
  address: "thai nguyen",
};
let d = "huy";
console.log("type of c", typeof c, "type of  d:", typeof d);
console.log(`what is your name ?, my name 's:`, obj["name"]);
console.log("where are you from ?", `I'm from : `, obj["address"]);

// có thề khai bao theo kiểu obj[] hoac obj.

//khai bao mang array
let ary = ["MU", "MANCITY", "CHELSEA"];
console.log("type of b: ", typeof ary, ary);
console.log("first item: ", ary[0], "sercon item", ary[1]);

let family = [
  { name: "huy", age: 25 },
  { name: "linh", age: 22 },
];
console.log("my family:", family);

const fruits = ["Apple", "Banana", "Orange", "dyuong", "dinh", "huy", 1, 2, 3];
for (x of fruits) {
  console.log(x);
}
//nen dung dau ===

//empty, null ,undefined
//undefined : chua dinh nghĩa
//empty : k co gi tri

let ArrayTop4 = ["mc", "lv", "chs"];
let i = 0;
while (i < ArrayTop4.length) {
  console.log("chao", ArrayTop4[i]);
  i++;
}
