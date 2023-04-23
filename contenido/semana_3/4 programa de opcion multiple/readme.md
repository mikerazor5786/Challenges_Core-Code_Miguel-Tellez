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
