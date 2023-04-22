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