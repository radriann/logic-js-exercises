// Escriba un programa que, dadas las longitudes de los catetos de un triángulo rectángulo, calcule la longitud de su hipotenusa.

/* formula: hipotenusa = raíz (cat1** + cat2**)  */

function hypotenuse(cat1, cat2) {
	if (typeof cat1 !== 'number' || typeof cat2 !== 'number')
		return 'One parameter is wrong';

	const catAdd = cat1 ** 2 + cat2 ** 2;
	const sqRt = Math.sqrt(catAdd);
	return Math.round(sqRt);
}
hypotenuse(8, 4);
