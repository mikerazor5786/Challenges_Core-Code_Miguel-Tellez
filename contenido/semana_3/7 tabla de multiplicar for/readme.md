Algoritmo tabla_multiplicar_para
	
	Definir  num Como Entero;
	
	Escribir "Ingresa el numero para que se te muestre la tabla de multiplicar";
	Leer num;
	i=1;
	Para i<-1 Hasta 10 Con Paso paso Hacer
		
		Escribir num," X ",(i)," = ",(num*i);
		i = i + 1;
	Fin Para
	
FinAlgoritmo