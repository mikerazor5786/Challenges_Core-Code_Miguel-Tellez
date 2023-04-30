# DESCRIPCIÓN DEL PROBLEMA

Haz un programa que pida 5 valores y además nos permita saber cuál está más alejado de cero, una vez obtenido devuelve ese número (los números pueden ser negativos), mostrando solo la parte entera del número.

# SOLUCIÓN DEL PROBLEMA

Algoritmo num_alejado_0
	
	Definir num,aux_neg Como Real;
	aux_neg = 0;
	aux_pos = 0
	Para i <- 0 Hasta 4 Con Paso 1 Hacer
		Escribir "Ingresa el ",(i+1),"o. numero";
		Leer num;
		Si (num < 0) Entonces
			Si num < aux_neg Entonces
				aux_neg = num;
			Fin Si
		SiNo
			Si num > aux_pos Entonces
				aux_pos = num;
			FinSi
		Fin Si
	Fin Para
	aux_neg = abs(aux_neg);
	Si aux_neg > aux_pos Entonces
		aux_neg =((aux_neg) * (-1));
		Escribir trunc(aux_neg);
	SiNo
		Escribir trunc(aux_pos);
	Fin Si
FinAlgoritmo