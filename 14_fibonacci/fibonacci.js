const fibonacci = function(number) {
  let penultimate = 0;
  let previous = 0;
  let current = 1;
  let num = Number(number);

  if (num == 0) return 0; 
  if (num < 1) return "OOPS"; 

  for (let i = 1; i <= num; i++) {
    current = (penultimate + previous) === 0 ? current : (penultimate + previous);
    penultimate = previous;
    previous = current;
  }

  return current;
};

// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
// returns the 4th member of the series: 3  (1, 1, 2, 3)