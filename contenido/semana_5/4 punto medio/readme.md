# DESCRIPCIÓN DEL PROBLEMA 

escribe una funcion llamada punto medio que dados 2 valores (puede ser negativo) no devuelva el valor del punto medio entre ellos

-50,50 --> 0

40, 80 --> 60





# SOLUCIÓN DEL PROBLEMA

Funcion medio <- p_medio(p_1,p_2)
	
	p_aux = p_1 + p_2;
	Si (p_aux == 0) Entonces
		medio = 0;
	SiNo
		medio = p_aux / 2;
	Fin Si
FinFuncion


Algoritmo punto_medio
	
	Definir  punto_1, punto_2 Como Entero;
	Escribir "ingrese el primer punto";
	Leer punto_1;
	Escribir "ingrese el segundo punto";
	Leer punto_2;
	
	Escribir "El punto medio es: ",p_medio(punto_1,punto_2);
	
FinAlgoritmo
