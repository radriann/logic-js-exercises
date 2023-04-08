// 3. Crea una función que tome una cadena como argumento y devuelva la cadena en orden inverso.

function invertString(str) {
  if (typeof str !== 'string') return 'Please provide an string'

  let result = ''
  if (typeof str === 'string') {
    result = str.split('').reverse().join('')
  }
  return result
}
invertString('Hello World')