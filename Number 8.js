// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
function discount(price, percentage) {
  if (typeof price === 'number' && typeof percentage === 'number') {
    let result = price - (price * percentage / 100);
    return result;
  }
  return 'One parameter is wrong!'
}
discount(1000, 20);