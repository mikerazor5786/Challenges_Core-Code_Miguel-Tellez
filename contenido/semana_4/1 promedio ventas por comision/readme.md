



# DESCRIPCIÓN DEL CHALLENGE

Hacer un programa que pregunte cuantas ventas tuvo el vendedor, Una vez ingresado el número de ventas, 

pida el valor de cada venta hasta ingresar todas, luego devuelva como resultado el valor promedio de 

las ventas, y la comisión que se llevará el vendedor. tome, si el vendedor tuvo más de 5 ventas, su comisión 

será del 15% del valor total de las ventas, si vendió 5 o menos, su comisión será solo del 10%.Hasta.


# SOLUCIÓN DEL PROBLEMAS

Algoritmo promedio_ventas
	
	Definir num_ventas, conteo_ventas Como Entero;
	Definir  acum_ventas,tot_ventas,prom_ventas,comision Como Real;
	
	Escribir "Ingrese el numero de ventas del vendedor";
	Leer num_ventas;
	
	Para i <- 1 Hasta num_ventas Con Paso paso Hacer
		Escribir "Ingrese el valor de la ",(i),"o. venta: ";
		Leer acum_ventas;
		tot_ventas = tot_ventas + acum_ventas;
		i = i + 1;
	Fin Para
	prom_ventas = tot_ventas/num_ventas;
	
	Si (num_ventas > 5) Entonces
		comision = tot_ventas * .15;
		Escribir "El numero de ventas realizadas es de: ",num_ventas;
		Escribir "El total de las ventas realizadas es de: Q",tot_ventas;
		Escribir "el promedio de las ventas realizadas es de: Q",prom_ventas;
		Escribir "La comision para el vendedor por sus ventas fue de: Q",comision;
	SiNo
		comision = tot_ventas * .05;
		Escribir "El numero de ventas realizadas es de: ",num_ventas;
		Escribir "El total de las ventas realizadas es de: Q",tot_ventas;
		Escribir "el promedio de las ventas realizadas es de: Q",prom_ventas;
		Escribir "La comision para el vendedor por sus ventas fue de: Q",comision;
	Fin Si
	
FinAlgoritmo