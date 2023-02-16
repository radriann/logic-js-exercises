/* Escribir un programa que pida al usuario dos números enteros y muestre por pantalla el siguiente mensaje:
“<n> entre <m> da un cociente <c> y un resto <r>”, donde
<n> y <m> son los números introducidos por el usuario, y <c> y <r> son el cociente y el resto de la división entera respectivamente. */

function showDivision(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    return 'One parameter is wrong';
  }
  
  if (n1 / n2 === Infinity) return 'Is Infinite!';
  
  const result = n1 / n2;
  const module = n1 % n2;
  
  return `${n1} entre ${n2} da un cociente de ${result} y un resto de ${module}`;
}
showDivision(10,5);