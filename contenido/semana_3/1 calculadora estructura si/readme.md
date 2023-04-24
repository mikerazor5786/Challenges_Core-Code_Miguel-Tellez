# DESCRIPCIÓN DEL PROBLEMA

Para este reto estarás realizando una calculadora sencilla, esta calculadora puede realizar las siguientes operaciones:

suma (+)
Restar (-)
Multiplicación (*)
División (/)
La calculadora debe solicitar al usuario dos números, luego de solicitar los dos números, debe solicitar la operación a realizar, tenga en cuenta que debe mostrar al usuario las opciones disponibles (+, -, *, /). Lo primero que se debe hacer es validar que la operación que el usuario ingresó es válida, si no es una opción válida se le debe mostrar al usuario un mensaje de error, por ejemplo: y terminar el programa ⚠️ La operación no es valida. Si la operación es válida mostrar el mensaje: Procesando: <OPERACIÓN A REALIZAR>Por ejemplo: si el usuario ha ingresado los números 10 y 15 además de la operación *, el mensaje debe leer: Procesando: 10 * 15. Luego de este mensaje se debe mostrar el resultado de la operación, siguiendo el ejemplo anterior, el resultado de operar 10*15 es 150, por lo que el programa deberá devolver:Resultado: 150. Recuerda usar condicionales para identificar qué operaciones debes ejecutar.


# SOLUCIÓN DEL PROBLEMA

Algoritmo calculadora
	
	Definir num_1, num_2 Como Real;
	Definir op Como Caracter;
	
	Escribir "Ingrese el primer numero a procesar ";
	Leer  num_1;
	Escribir "Ingrese el segundo numero a procesar ";
	Leer  num_2;
	Escribir  "****************SELECCIONE UNA OPERACION*************************";
	Escribir  " + --------------> SUMA";
	Escribir  " - --------------> RESTA";
	Escribir  " * --------------> MULTIPLICACION";
	Escribir  " / --------------> DIVISION";
	Leer op;	
	
	si op == '+' Entonces
		Escribir " Procesando:   " , num_1 " + " , num_2;
		Escribir " El resultado de la Suma es: ",num_1 + num_2;
	SiNo
		si op == '-' Entonces
			Escribir " Procesando:   " , num_1 " - " , num_2;
			Escribir " El resultado de la Resta es: ",num_1 - num_2
		SiNo
			si	op == '*' Entonces
				Escribir " Procesando:   " , num_1 " * " , num_2;
				Escribir " El resultado de la Multiplicacion es: ",num_1 * num_2;
			SiNo
				si	op	== '/' Entonces
					Escribir " Procesando:   " , num_1 " / " , num_2;
					Escribir " El resultado de la division es: ",num_1 / num_2;
				SiNo
					Escribir "SELECCIONE UNA OPERACION ARITMETICA VALIDA ";
				FinSi
			FinSi
		FinSi		
	FinSi
FinAlgoritmo
