# DESCRIPCIÓN DEL PROBLEMA

Debes crear el código que sigue la siguiente lógica, si el número dado es 100, toma este número como especial y muestra el siguiente mensaje: "¡Este es un número especial!", pero si el número es menor que 1000, múltiplo de 10 y diferente de 100, debe mostrar el siguiente mensaje: "Este número es casi especial". si no se cumple ninguna de las condiciones dadas mostrar el siguiente mensaje: "Sólo un número regular". Otro desarrollador estaba tratando de programar la lógica, pero aparentemente no pudo, necesita corregir el código para que funcione correctamente.

Este fue el código del desarrollador.

Algoritmo specialNumber
	Leer n
	Si n == 100 Entonces
		Imprimir 'This is a special number'
	FinSi
	Si n < 1000 Entonces
		Imprimir ''
	SiNo
		Imprimir 'Just a regular number'
	FinSi
	Si n % 10 == 0 Entonces
		Imprimir 'This number is multiple of 10'
	FinSi
FinAlgoritmo



# SOLUCIÓN DEL PROBLEMA

Algoritmo num_especial
	
	definir num Como Entero;
	
	Leer num;
	si num == 100 Entonces
		Escribir "El numero ingresado es ESPECIAL";
	SiNo
		si ((num < 1000) & ((num % 10) == 0) & (num <> 100)) Entonces
			Escribir "Este número es casi especial";
		SiNo
			Escribir "Solo es un numero regular";
		FinSi
	FinSi
FinAlgoritmo