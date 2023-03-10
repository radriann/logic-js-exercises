// Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// Solucion creada por laindomJS

function countLetters(string) {
  
  if (typeof string !== 'string') return 'This is no a string!';
  if (string.length === 0) return 'The string is empty';
  
  let result;
  let spaces = string.includes(' ');
  
  for (let i = 0; i < string.length; i++) {  
    spaces 
      ? result = i 
      : result = i + 1  
  } 
  return result
}
countLetters('Hello World');

// Solucion creada por Raynier95

const contadorPalabras=(texto)=>{
  if(!texto) return console.warn('No es un texto')
  let contadorCaracteres
  for(let i=1;i<=texto.length;i++){
    contadorCaracteres = Math.max(i)
  }
   console.log(`La palabra ${texto} tiene ${contadorCaracteres} letras`)
}
contadorPalabras('agua miel')