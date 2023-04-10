// 18. Crea una función que tome una matriz de números como argumento y devuelva una nueva matriz con solo los números mayores que 5.

function onlyUpperToFive(arr) {
  if (!Array.isArray(arr)) return 'Please provide an array'
  if (arr.length === 0) return 'Please put items in the array'
  
  let upperToFive =  []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return 'The array may be only contain numebers'
    if (arr[i] > 5) {
      upperToFive.push(arr[i])
    }
  }
  return upperToFive
}
onlyUpperToFive([2,3,1,2,46,8,12,345,124,56,1,2,44,12])