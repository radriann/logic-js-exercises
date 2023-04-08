// Crea una función que tome un número como argumento y devuelva "par" si es par o "impar" si es impar.

function isEven(num) {
  if (typeof num === 'number') {
    return num % 2 === 0 ? 'Is Even' : 'Not Even'
  }
  return 'Please provide a number'
}
isEven(8);