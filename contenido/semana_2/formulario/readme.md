# DESCRIPCIÓN DEL PROBLEMA

Se le asigna la tarea de crear un formulario de registro para nuevos usuarios, este formulario debe solicitar al usuario la siguiente información:

1. Nombre de pila

	a. Apellido

	b. Edad

	c. Correo electrónico

	d. DIRECCIÓN
	
Al finalizar el programa, debe imprimir toda la información añadida del usuario de forma amigable

# SOLUCIÓN DEL PROBLEMA

## FORMULARIO DE REGISTRO PSEUDOCODIGO

Algoritmo formulario_registro
	
	Definir  nombre, apellido, correo, direccion como cadena;
	Definir  edad Como Entero;
	
	Escribir "=========FORMULARIO DE REGISTRO===============";
	Escribir "Ingrese su primer nombre";
	Leer  nombre;
	Escribir "Ingrese su apellido";
	Leer  apellido;
	Escribir "Ingrese su edad";
	Leer edad;
	Escribir "Ingrese su correo electronico";
	Leer  correo;
	Escribir "Ingrese su direccion";
	Leer direccion;
	Borrar Pantalla;
	
	Escribir "========INFORMACION DE USUARIO==============="
	Escribir "Nombre completo de usuario: ",nombre + " " + apellido;
	Escribir "Edad de: ",edad;
	Escribir "Su correo es: ",correo;
	Escribir "Su direccion es: ", direccion;
	
	
FinAlgoritmo