const removeFromArray = function(arr, ...items) {
  for (let i = 1; i < arguments.length; i++) {
    let isIndexPositive = true;
  
    while (isIndexPositive) {
      index = arr.indexOf(arguments[i]);
      isIndexPositive = index >= 0;

      if (isIndexPositive) {
        arr.splice(index, 1);
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
