// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function transformTemperature(temp, type) {
  if (typeof temp !== 'number' || typeof type !== 'string') return 'One parameter is wrong';
  
  if (type === 'C') {
    let result = (temp * 1.8) + 32;
    return `${parseInt(result)}ºF`
  }
  
  if (type === 'F') {
    let result = (temp - 32) / 1.8;
    return `${parseInt(result)}C`
  }
}
transformTemperature(30, 'F');