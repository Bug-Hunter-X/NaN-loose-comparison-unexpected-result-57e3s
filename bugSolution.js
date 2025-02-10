function foo(a, b) {
  // Use Object.is to correctly compare NaN
  return Object.is(a, b);
}

console.log(foo(NaN, NaN)); // true

function foo2(a, b) {
  //Alternative solution using Number.isNaN
  return Number.isNaN(a) && Number.isNaN(b);
}
console.log(foo2(NaN,NaN)); //true