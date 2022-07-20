function sum(n1) {
  console.log(n1);
  return function(nx) {
    return sum(n1 + nx);
  }
}

sum(5)(10)(4)(100)(1235)(2);
