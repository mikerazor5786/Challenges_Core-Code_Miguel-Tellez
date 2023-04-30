# DESCRIPCIÓN DEL PROBLEMA

haga un programa que simule la tirada de 2 dados 10 veces, y muestre para cada tirada los valores de los dos dados separados por un espacio, en caso de que los 2 dados tiren el mismo valor además del resultado, añada una cadena a el final que dice "los dados son iguales".


# SOLUCIÓN DEL PROBLEMA

Algoritmo lanzamiento_dado
	
	Definir num_dado1, num_dado2 Como Entero;
	
	Para i <- 1 Hasta 6 Con Paso 1 Hacer
		num_dado1 = azar(6) +1;
		num_dado2 = azar(6) +1;
		Si (num_dado1 == num_dado2) Entonces
			Escribir num_dado1," ",num_dado2," Los valores son inguales";
		SiNo
			Escribir num_dado1," ",num_dado2;
		Fin Si
	Fin Para
	
FinAlgoritmo