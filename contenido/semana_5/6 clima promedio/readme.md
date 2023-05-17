# DESCRIPCIÓN DEL PROBLEMA
escriba un algoritmo que se repita indefinidamente hasta que se ingrese 'x' que calculará un promedio del clima, tenga en cuenta que para cada valor ingresado debe preguntar si es Fahrenheit o Celsius, luego pregunte por el valor. sume todo y divida por la cantidad de valores ingresados. El resultado debe ser devuelto en celsius, tener una función que, en caso de ingresar fahrenheit, lo transforme a celsius para poder sumarlos.




# SOLUCIÓN DEL PROBLEMA 

Funcion retorno_celcius <- convercion(grad)

		retorno_celcius = ((grad - 32) * (5/9));
        
FinFuncion


Algoritmo temperatura_promedio
	Definir  grados,acum_grados Como Real;
	Definir op Como Caracter;
	
	Repetir
		Escribir "Seleccione una opcion";
		Escribir "a -------> Grados Celcius";
		Escribir "b -------> Grados Fahrenheit";
		Escribir "x -------> Salir";
		Leer op;
		Segun op Hacer
			'a':
				Escribir "Ingrese los grados Celcius"
				Leer grados;
				acum_grados = acum_grados + grados;
				contador = contador + 1;
			'b':
				Escribir "Ingrese los grados Fahrenheit"
				Leer grados;
				acum_grados = acum_grados + convercion(grados);
				contador = contador + 1;
		FinSegun
		
		Escribir acum_grados;
		Escribir contador;
	Hasta Que ((op == 'x') | (op == 'X'))
	
	prom_grados = acum_grados/contador;
	
	Escribir "El promedio de los grados ingresados es de: ",prom_grados;
	
FinAlgoritmo