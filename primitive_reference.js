//primitive vs reference

/* let x = 5;
let y = 6;
x = y;
console.log(x);
console.log(y); */

let a = ["JS", "Python"]
let b = ["HTML", "CSS"]
b = a;
console.log(a);
console.log(b);
a.push("Go");
console.log(a);
console.log(b);