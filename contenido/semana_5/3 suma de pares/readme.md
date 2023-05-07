# DESCRIPCIÓN DEL PROBLEMA 
escriba una función llamada sumOfPairs que pida un número del 1 al 100 indefinidamente, si se ingresa un número negativo o mayor a 100, deja de pedir más números y devuelve la suma de todos los números pares ingresados.

4, 12, 100, 11, -60 --> 116

40, 121 --> 40



# SOLUCIÓN DEL PROBLEMA

SubProceso tot_pares()
	Definir datos Como Real;
	sumatoria_pares = 0;
	contador = 1;
	Repetir
		Escribir "Ingrese la ",contador,"o. cantidad";
		Leer datos;
		Si ((datos mod 2) == 0) Entonces
			sumatoria_pares = sumatoria_pares + datos;
		Fin Si
		contador = contador +1;
	Hasta Que ((datos <= 0) | (datos > 100))
	
	Escribir "La sumatoria de los numeros pares es de: ",sumatoria_pares;
FinSubProceso


Algoritmo sum_pares
	
	tot_pares();
	
FinAlgoritmo