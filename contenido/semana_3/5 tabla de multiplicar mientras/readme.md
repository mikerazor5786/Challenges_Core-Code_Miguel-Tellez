# DESCRIPCIÓN DEL PROBLEMA 

Para este reto crearás un programa para calcular las tablas de multiplicar de un número dado usando Mientras (Mientras) . El usuario debe ingresar un número y luego se debe imprimir la tabla de multiplicar para el número.

# SOLUCIÓN DEL PROBLEMA 

Algoritmo tabla_multiplicar_mientras
	
	Definir  num Como Entero;
	
	Escribir "Ingresa el numero para que se te muestre la tabla de multiplicar";
	Leer num;
	i=1
	Mientras i <= 10 Hacer
		Escribir num," X ",(i)," = ",(num*i);
		i = i + 1;
	Fin Mientras
	
FinAlgoritmo
