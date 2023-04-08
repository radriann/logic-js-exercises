// Crea una función que tome una cadena como argumento y devuelva la cadena con todas las vocales en mayúsculas.

function upperVocals(string) {
  if (typeof string !== 'string') return 'Error, please provide an string';
  
  let result = '';
  const vowels = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
  
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (vowels.includes(char)) {
      char = char.toUpperCase();
    }
    result += char;
  }
  return result;
}
upperVocals('Hello World');