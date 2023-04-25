# DESCRIPCIÓN DEL PROBLEMA 

Solicita un número del 1 al 50, si el número no está entre esos valores, reporta el error y vuelve a solicitarlo hasta obtener un número válido, luego muestra en pantalla todos los números del 1 hasta ese número, si el número está even solo muestra los números pares, si es impar solo muestra los impares.

# SOLUCION DEL PROBLEMA 

Algoritmo PAR_IMPAR
	
	Definir num Como Entero;
	
	Repetir
		Escribir "Ingrese un numero entre 1 y 50 ";
		leer num;
		
		Si ((num >= 1) & (num <= 50)) Entonces
			Si ((num % 2) = 0) Entonces
				Para i<-0 Hasta num Con Paso paso Hacer
					Escribir i;
					i = i +2;
				Fin Para
			SiNo
				Para i<-1 Hasta num Con Paso paso Hacer
					Escribir i;
					i = i +2;
				Fin Para
			Fin Si
		SiNo
			Escribir "Numero invalido, Fuera de rango...!!!";
		Fin Si
	Hasta Que ((num >= 1) & (num <= 50))
	
FinAlgoritmo