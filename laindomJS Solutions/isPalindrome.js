// 6. Crea una función que tome una cadena como argumento y devuelva true si la cadena es un palíndromo (es decir, se lee igual de izquierda a derecha que de derecha a izquierda).

function isPalindrome(str) {
  if (typeof str === 'string') {
    const reversedString = str.toLowerCase().split('').reverse().join('')
    return str.toLowerCase() === reversedString
  }
  return 'Please provide an string'
}
isPalindrome('Somos')