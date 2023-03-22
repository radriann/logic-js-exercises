//  Escriba un programa que lea un número de cuatro dígitos y muestre en pantalla el número escrito en reverso. Por ejemplo, si el número leído es 5432, la salida debería ser 2345.
function reverseNumbers(numbers) {
  if (typeof numbers !== 'number') return 'Error! Provide a number';  
  if (String(numbers).length < 2) return 'Error! The number is to short';
  
  let result;    
  result = String(numbers).split('').reverse().join('');
  return Number(result);
}
reverseNumbers(1234);