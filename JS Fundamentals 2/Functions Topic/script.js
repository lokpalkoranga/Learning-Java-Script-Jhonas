"use strict";

//A function is a block of reusable code written to perform a specific task.
//Basically means Reusing code
//calling /running /invoke function

function logger() {
  console.log("My name is Lokpal");
}

logger();

function makeTea(sugar) {
  console.log("Boil water");
  console.log("Add tea leaves");
  console.log("Add " + sugar + " spoons of sugar");
}
let tea = makeTea(2);
console.log(tea);

//Function ka kaam hota hai kaam karna
//return ka kaam hota hai dena
//const ka kaam hota hai rakhna
//console.log ka kaam hota hai dikhana
