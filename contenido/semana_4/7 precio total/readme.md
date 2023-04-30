# DESCRIPCIÓN DEL PROBLEMA

Cree una función llamada PrecioTotal que tome 2 parámetros, precio e IVA , y devuelva el precio con IVA incluido. si el precio supera los 3000 se hace un descuento del 10 por ciento sobre el precio total.


# SOLUCIÓN DEL PROBLEMA

Funcion monto_total <- p_total (m,i)

	Definir monto_total,descuento Como Real;

	monto_total = ((m * ((i/100)+1)));
	
FinFuncion

Algoritmo precio_total
	
	Definir monto, iva,val Como Real;
	
	Escribir "Ingrese el monto para realizar calculos";
	Leer monto;
	Escribir "Ingrese el IVA ";
	Leer iva;
	
	val = p_total(monto,iva);	
	
	Si (val > 3000) Entonces
		descuento = val * .10;
		val = val - descuento;
		Escribir "El precio con IVA incluido tuvo un desceunto del 10%";
		Escribir "El precio total es de Q.",val;
	SiNo
		Escribir "Su precio no tuvo descuento por ser menor a Q3000.00";
		Escribir "Su precio total es de: ",val;
	Fin Si
FinAlgoritmo