# DESCRIPCIÓN DEL PROBLEMA

¿Recuerdas el último desafío sobre el operador Mod? Bueno, hoy tu tarea será crear un programa que sea capaz de detectar en base a la entrada del usuario 

si el número es impar o par. El proceso debe ser el siguiente:

El usuario ingresa un número

Su algoritmo detecta si el número es par o impar (recuerde usar declaraciones condicionales Si...Entonces)

Imprime 'Número: x es par' si el número es par (x es el número que ingresa el usuario)

Imprime 'Número: x es impar' si el número es impar (x es el número que ingresa el usuario)

# SOLUCIÓN DEL PROBLEMA

## PSEUDOCODIGO PAR E IMPAR MEJORADO

Algoritmo par_impar
	
	Definir  num Como Entero;
	
	Escribir "ingrese un numero";
	Leer num;
	
	Si ((num % 2) == 0) Entonces
		Escribir "el numero: ",num," es par";
	SiNo
		Escribir "el numero: ",num," es impar";
	Fin Si
	
FinAlgoritmo