// Escriba un programa que, dadas las longitudes de los catetos de un triángulo rectángulo, calcule la longitud de su hipotenusa.

/* formula: hipotenusa = raíz (cat1** + cat2**)  */

// Solucion creada por laindomJS

function hypotenuse(cat1, cat2) {
	if (typeof cat1 !== 'number' || typeof cat2 !== 'number')
		return 'One parameter is wrong';

	const catAdd = cat1 ** 2 + cat2 ** 2;
	const sqRt = Math.sqrt(catAdd);
	return Math.round(sqRt);
}
hypotenuse(8, 4);

// Solucion creada por Raynier95
// Se añadieron 2 posibles soluciones al problema

const catetoTriangulo=(cat1=undefined,cat2=undefined)=>{
  if(cat1 === undefined || cat2 === undefined) return console.warn(`Esta undefinido`);
  if(typeof cat1 !== 'number' || typeof cat2 !== 'number') return console.warn(`No es un numero valido`);

//   Forma 1
//   let sumaCatetos = Math.pow(cat1,2)+Math.pow(cat2,2)
//   let hipotenusa = Math.sqrt(sumaCatetos)
//   console.log(hipotenusa)

//   Forma 2
//   let hipotenusa = Math.sqrt(Math.pow(cat1,2)+Math.pow(cat2,2))
//   console.log(hipotenusa)
}
// catetoTriangulo(7,5)