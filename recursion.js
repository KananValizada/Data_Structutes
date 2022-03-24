function findFactorial(number) {
  if (number == 2) {
    return 2;
  }

  return number * findFactorial(number - 1);
}

// console.log(findFactorial(5));

function findFactorial2(number) {
  var a = 1;
  for (var i = 1; i <= number; i++) {
    a *= i;
  }
  return a;
}

// console.log(findFactorial2(5));
//0 1 1 2 3 5 8 13 21 34

function fibonnacyItirative(number) {
  if (number < 2) {
    return number;
  }

  let lastNum = 0;
  let recNum = 1;

  while (number > 1) {
    nextNum = lastNum + recNum;
    lastNum = recNum;
    recNum = nextNum;
    number--;
  }
  return nextNum;
}

function fibonnacyRecursive(number) {
  if (number < 2) {
    return number;
  }
  debugger;
  return fibonnacyRecursive(number - 1) + fibonnacyRecursive(number - 2);
}

console.log(fibonnacyItirative(8));

console.log(fibonnacyRecursive(8));
