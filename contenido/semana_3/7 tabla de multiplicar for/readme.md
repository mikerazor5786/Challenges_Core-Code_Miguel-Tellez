# DESCRIPCIÓN DEL PROBLEMA

Para este desafío, creará un programa para calcular las tablas de multiplicar de un número dado usando el ciclo For(Para) . El usuario debe ingresar un número y luego se debe imprimir la tabla de multiplicar para el número.


# SOLUCIÓN DEL PROBLEMA

Algoritmo tabla_multiplicar_para
	
	Definir  num Como Entero;
	
	Escribir "Ingresa el numero para que se te muestre la tabla de multiplicar";
	Leer num;
	i=1;
	Para i<-1 Hasta 10 Con Paso paso Hacer
		
		Escribir num," X ",(i)," = ",(num*i);
		i = i + 1;
	Fin Para
	
FinAlgoritmo