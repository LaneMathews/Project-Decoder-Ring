// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
  const trueAlph = "abcdefghijklmnopqrstuvwxyz"
  if (!alphabet){
    return false
  }
  if (alphabet.length !== 26){
    return false
  }
  for (let i = 0; i < alphabet.length;i++){
    if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])){
      return false
    }
  }
  
  let dictionary = {}
  for(let i=0;i< trueAlph.length;i++){
    dictionary[trueAlph.substr(i,1)]=alphabet.substr(i,1)
  }
  if (encode === false) {
    for(let i=0;i< trueAlph.length;i++){
      dictionary[alphabet.substr(i,1)]=trueAlph.substr(i,1)
  }
}
  console.log(dictionary)
  let result = ""
  for(let i =0;i< input.length;i++){
    if (input.substr(i,1) in dictionary){
    result = result + dictionary[input.substr(i,1)]
  }
    else
    {
      result = result + input.substr(i,1)
    }
  }
  return result
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
