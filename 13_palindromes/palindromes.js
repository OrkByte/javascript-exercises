const palindromes = function (inputStr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";

  const cleanStrArr = inputStr
    .toLowerCase()
    .split("")
    .filter(letter => alphabet.includes(letter));
                          
  let lastIndex = cleanStrArr.length - 1;

  for (let i = 0; i < cleanStrArr.length; i++) {    
    if (cleanStrArr[i] !== cleanStrArr[lastIndex]) {
      return false;
    }

    lastIndex--;
  }                        

  return true;
};

// Do not edit below this line
module.exports = palindromes;