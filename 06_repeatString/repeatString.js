const repeatString = function(string, num) {
  let resultStr = "";

  for (let i = 0; i < num; i++) {
    resultStr = resultStr.concat(string);
  }

  return num < 0 ? "ERROR" : resultStr;
};

// Do not edit below this line
module.exports = repeatString;
