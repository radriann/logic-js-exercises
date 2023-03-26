// Programar una función que dada una string, devuelva un array de textos separados por cierto caracter. No usar el método split.
function splitString(string, char) {
  let arr = [];
  let temp = '';
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      arr.push(temp)
      temp = ""
    } else {
      temp += string[i];
    }
  }
  
  arr.push(temp);
  return arr;
}
splitString('Hello World desde ChatGPT', ' ');