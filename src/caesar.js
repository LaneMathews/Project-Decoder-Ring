// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25){
      return false
    }
    if (encode === false) {
        shift = shift * -1
    }
    let lInput = input.toLowerCase()
    let tempArray = []
    
    for (i = 0; i < lInput.length; i++){
        let splitLetter = lInput.charCodeAt(i)
       if (splitLetter >= 97 && splitLetter <= 122){
        let newLetter = splitLetter + shift
            if (newLetter < 97) {
                newLetter = newLetter + 26
            }
            if (newLetter > 122){
                newLetter = newLetter - 26
            }
            fixedLetter = String.fromCharCode(newLetter)
            tempArray.push(fixedLetter)
       }
       else {
           fixedLetter = String.fromCharCode(splitLetter)
           tempArray.push(fixedLetter)
       }
    }
    result = tempArray.join("")
    return result
  }
  return {
    caesar,
  };
})();



module.exports = caesarModule.caesar;
