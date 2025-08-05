const sumAll = function(num1, num2) {
  let largeNum;
  let smallNum;
  let sum = 0;

  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (num1 < num2) {
    largeNum = num2;
    smallNum = num1;
  } else if (num1 > num2) {
    largeNum = num1;
    smallNum = num2;
  } else {
    return sum;
  }

  for (let num = smallNum; num <= largeNum; num++) {
    sum += num;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
