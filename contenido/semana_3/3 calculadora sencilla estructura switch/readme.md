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

Segun op Hacer

	"+":

		Escribir " Procesando:   " , num_1 " + " , num_2;

		Escribir " El resultado de la Suma es: ",num_1 + num_2;

	"-":

		Escribir " Procesando:   " , num_1 " - " , num_2;

		Escribir " El resultado de la Resta es: ",num_1 - num_2;

	"*":

		Escribir " Procesando:   " , num_1 " * " , num_2;

		Escribir " El resultado de la Multiplicacion es: ",num_1 * num_2;

	" / ":

		Escribir " Procesando:   " , num_1 " / " , num_2;

		Escribir " El resultado de la division es: ",num_1 / num_2;

	De Otro Modo:

		Escribir "SELECCIONE UNA OPERACION ARITMETICA VALIDA ";
        
Fin Segun
FinAlgoritmo