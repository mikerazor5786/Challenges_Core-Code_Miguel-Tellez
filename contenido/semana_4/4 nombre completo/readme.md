# DESCRIPCIÓN DEL PROBLEMA

Haga un programa que tome un nombre y un apellido, luego devuelva una cadena con ambos valores con la primera letra en mayúscula y el resto en minúscula.


# SOLUCIÓN DEL PROBLEMA

Algoritmo nombre_completo
	
	Definir  nombre, apellido Como Caracter;
	Definir  tam_nombre, tam_apellido Como entero;
	
	Escribir "ingre el Nombre";
	leer nombre;
	Escribir "ingre el apellido";
	leer apellido;
	
	tam_nombre = Longitud(nombre);
	tam_apellido = Longitud(apellido);
	
	
	
	Escribir (Mayusculas(Subcadena(nombre,1,1)) Sin Saltar + Minusculas(Subcadena(nombre,2,tam_nombre)) Sin Saltar) + " " + (Mayusculas(Subcadena(apellido,1,1)) Sin Saltar + Minusculas(Subcadena(apellido,2,tam_apellido)) Sin Saltar);
	
	
	
FinAlgoritmo