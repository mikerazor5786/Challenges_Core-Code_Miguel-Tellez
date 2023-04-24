# DESCRIPCIÓN DEL PROBLEMA 

Para este reto crearás un programa con múltiples opciones usando Switch (Segun) , las opciones disponibles son las siguientes:

Suma dos números
Imprimir el día de la semana dado el número de día
Imprimir la longitud de un texto dado
Este programa debe contar con un menú de inicio donde el usuario debe seleccionar una de las opciones descritas anteriormente. Cuando el usuario seleccione cada una de las opciones, el programa realizará lo siguiente:

Suma. El usuario ingresa dos números y se imprime el resultado de la suma de ambos
Imprime el día de la semana. El usuario ingresa un día de la semana mediante números y se debe imprimir el nombre del día. Por ejemplo, si se ingresa el número 1, el programa imprime el texto Lunes.
Calcular la longitud del texto. El usuario ingresa un texto y se debe imprimir la longitud del texto. Pude usar la Longitudfunción Pseint para obtener la longitud.
Cuando el usuario ingresa una opción incorrecta, se debe imprimir un mensaje diciendo que la opción no está disponible.


# SOLUCIÓN DEL PROBLEMA

Algoritmo opciones_multiples
	Definir  op, num_dia Como Entero;
	Definir  num_1,num_2,resul_sum Como Real;
	Definir  text Como Caracter;
	
	Escribir "**********************Elige una opcion******************";
	Escribir "1. Suma dos números";
	Escribir "2. Imprimir el día de la semana dado el número de día";
	Escribir "3. Imprimir la longitud de un texto dado";
	
	Leer op;
	Segun op Hacer
		1:
			Escribir "Ingrese el primer numero";
			Leer num_1;
			Escribir "Ingrese el segundo numero";
			Leer num_2;
			resul_sum = num_1 + num_2;
			Escribir "El rsultado de la suma es de: ",resul_sum;
			
		2:
			Escribir "Ingrese el numero de dia para que sea interpretado";
			Leer num_dia;
			Segun num_dia Hacer
				1:
					Escribir "El dia es LUNES";
				2:
					Escribir "El dia es MARTES";
				3:
					Escribir "El dia es MIERCOLES";
				4:
					Escribir "El dia es JUEVES";
				5:
					Escribir "El dia es VIERNES";
				6:
					Escribir "El dia es SABADO";
				7:
					Escribir "El dia es DOMINGO";
			
				De Otro Modo:
					Escribir "debe ingresar un numero unicamente dentro del siguiente rango 1 - 7";
			Fin Segun
		3:
			Escribir "Ingrese la cadena para analizarla";
			Leer text;
			
			lon_cadena = Longitud(text);
			Escribir "La longitud de la cadena es de: ",lon_cadena;			
		De Otro Modo:
			Escribir "elija una opcion correcta";
	Fin Segun
	
FinAlgoritmo
