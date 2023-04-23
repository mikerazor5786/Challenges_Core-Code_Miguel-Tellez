Algoritmo numeros_ascendentes_descendentes
	
	Definir  num,op Como Entero;
	
	Escribir "Ingresa el numero limite del listado de numeros ";
	Leer num;
	Escribir  "**********************Elige una opcion******************";
	Escribir "1. Orden ascendente";
	Escribir "2. Orden descendente";
	Leer op;
	
	Segun op Hacer
		1:
			Para i<-0 Hasta num Con Paso paso Hacer
				Escribir i;
				i = i +1;
			Fin Para
		2:
			Para i<-num Hasta 0 Con Paso -1 Hacer
				Escribir i;
			Fin Para
		De Otro Modo:
			Escribir "SELECCIONE UNA OPCION CORRECTA ( 1 - 2 )";
	Fin Segun
FinAlgoritmo