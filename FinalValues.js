/*  Jay Allen
    FinalValues.js
    This javascript will verify the Final values as presented in home work.  
    9/4/18 */


console.log();
console.log("   Final Values   ");
console.log();

let a = 2;
console.log("a = " + a);
console.log(); 
a -=1;
console.log();
console.log("After a -=1, a = "+  a);
a++;
console.log("after a++");
console.log("a = " + a);

let b = 8;
console.log(); console.log();
console.log("entering b");
console.log("b = " + b);

b +=2;
console.log(" added 2 to b");
console.log("b = " + b);

console.log(); console.log();
console.log("constant c");
const c = a + b * b;
console.log("c = a + b * b = " + c);

console.log(); console.log();
console.log("constant d");
const d = a * b + b;
console.log("d = a * b + b = " + d);

console.log(); console.log();
console.log("constant e");
const e = a * (b + b);
console.log("e = a * (b + b) = " + e);

console.log(); console.log();
console.log("constant f");
const f = a * b / a;
console.log("f = a * b / a = " + f);

console.log(); console.log();
console.log("constant g");
const g = b / a * a;
console.log("g = b / a * a = " + g);

console.log(); console.log();
console.log("FINAL LINE");
console.log("a, b, c, d, e, f, g is below");
console.log(a, b, c, d, e, f, g);

