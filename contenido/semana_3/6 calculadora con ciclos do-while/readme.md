# DESCRIPCIÓN DEL PROBLEMA

Para este desafío vamos a usar la calculadora simple que hicimos en el desafío 02 pero ahora agregando la funcionalidad para realizar un cálculo nuevamente sin terminar el programa. El programa debería preguntarnos si queremos usar otra operación y si el usuario responde que sí entonces podemos realizar una nueva operación. Para resolver este desafío recuerda usar Do while (Repetir Hasta Que) .

# SOLUCIÓN DEL PROBLEMA

Algoritmo calculadora_ciclo-do-while
	
	Definir num_1, num_2 Como Real;
	
	Definir op Como Caracter;
	
	
	
	Repetir
		
		Escribir "**************SELECCIONE UNA OPERACION*********";
		
		Escribir " + --------------> SUMA";
		
		Escribir " - --------------> RESTA";
		
		Escribir " * --------------> MULTIPLICACION";
		
		Escribir " / --------------> DIVISION";
		
		Escribir " X --------------> SALIR DE LA CALCULADORA Y MOSTRAR RESULTADOS";
		
		Leer op;
		
		Segun op Hacer
			
			"+":
				Escribir "Ingrese el primer numero a procesar ";
				
				Leer num_1;
				
				Escribir "Ingrese el segundo numero a procesar ";
				
				Leer num_2;
				Escribir " Procesando:   " , num_1 " + " , num_2;
				Escribir " El resultado de la Suma es: ",num_1 + num_2;
			"-":
				Escribir "Ingrese el primer numero a procesar ";
				
				Leer num_1;
				
				Escribir "Ingrese el segundo numero a procesar ";
				
				Leer num_2;
				Escribir " Procesando:   " , num_1 " - " , num_2;
				Escribir " El resultado de la Resta es: ",num_1 - num_2;
			"*":
				Escribir "Ingrese el primer numero a procesar ";
				
				Leer num_1;
				
				Escribir "Ingrese el segundo numero a procesar ";
				
				Leer num_2;
				Escribir " Procesando:   " , num_1 " * " , num_2;
				Escribir " El resultado de la Multiplicacion es: ",num_1 * num_2;
			" / ":
				Escribir "Ingrese el primer numero a procesar ";
				
				Leer num_1;
				
				Escribir "Ingrese el segundo numero a procesar ";
				
				Leer num_2;
				Escribir " Procesando:   " , num_1 " / " , num_2;
				Escribir " El resultado de la division es: ",num_1 / num_2;
			De Otro Modo:
				Escribir "A SELECCIONADO SALIR";
		Fin Segun 
	
	Hasta Que ((op = 'x') | (op = 'X'))
FinAlgoritmo