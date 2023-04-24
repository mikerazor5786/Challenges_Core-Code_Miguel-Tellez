# DESCRIPCIÓN DEL PROBLEMA 

Para este desafío, debe crear un programa que imprima un saludo basado en una hora ingresada. El programa debe hacer lo siguiente:

1. Imprimir Buenos dias!si la hora es de 0 a 12
2. Imprimir Buenas tardes!si la hora es de 13 a 18
3. Imprimir Buenas noches!si la hora es de 19 a 23
4. Preguntar al usuario si quiere realizar otro saludo. Si la respuesta es Si, el programa debe comenzar de nuevo.

Al final del programa, imprima el número de veces que el programa ha saludado.


# SOLUCION DEL PROBLEMA

Algoritmo saludos
	Definir  num,cont_saludo Como Entero;
	Definir pregunta Como Caracter;
	
	Repetir
		Escribir "Elija la hora del saludo";
		Leer num;
		
		Si ((num >= 0) & (num <= 12)) Entonces
			Escribir "BUENOS DIAS...!!";
		SiNo
			Si ((num >= 13) & (num <= 18)) Entonces
				Escribir "BUENAS TARDES...!!";
			SiNo
				si ((num >= 19) & (num <= 23)) Entonces
					Escribir "BUENAS NOCHES...!!";
				SiNo
					Escribir "SELECCIONE UN HORARIO QUE ESTE EN EL FORMATO DE 24 HORAS";
				Fin Si
			Fin Si
		Fin Si
		cont_saludo = cont_saludo +1;
		Escribir "Desea repetir el saludo (SI/NO)";
		Leer pregunta;
		
	Hasta Que ((pregunta = 'no') | (pregunta = 'NO'))
	
	Escribir "El numero de saludos fue de: ",cont_saludo;
	
FinAlgoritmo
