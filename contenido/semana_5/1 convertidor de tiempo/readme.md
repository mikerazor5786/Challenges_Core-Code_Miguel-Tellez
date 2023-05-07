# DESCRIPCIÓN DEL PROBLEMA

Cree una función llamada timeConverter que reciba un número positivo de segundos y devuelva una cadena basada en el número. "Días: 1, Horas: 5, Minutos: 40 y segundos: 5"

4000 --> "días: 0, horas: 1, minutos: 6 y segundos: 4"

40000 --> "días: 0, horas: 11, minutos: 6 y segundos: 4"

150000 --> "días: 1, horas: 17, minutos: 40 y segundos: 0"


# SOLUCIÓN DEL PROBLEMA

SubProceso timeConverter(s)
	aux_dia = s/86400;
	
	Si (aux_dia < 1) Entonces
		dias = 0;
		horas = trunc(aux_dia * 24);
		minutos = trunc(((aux_dia *24)- horas) * 60);
		sec = (((((aux_dia *24)- horas) * 60) - minutos) *60);
		Escribir "dias: ",dias," horas: ",horas," minutos: ",minutos," y segundos: ",sec;
	SiNo
		dias = trunc(aux_dia);
		horas = trunc((aux_dia - dias) * 24);
		minutos = trunc(((((aux_dia - dias) * 24) - horas) * 60))
		sec = ((((((aux_dia - dias) * 24) - horas) * 60) - minutos) * 60)
		Escribir "dias: ",dias," horas: ",horas," minutos: ",minutos," y segundos: ",sec;
	Fin Si
FinSubProceso


Algoritmo conversor_tiempo
	Definir seg Como Entero;
	Escribir "Ingrese la cantidad de segundos a convertir: ";
	Leer seg;
	
	timeConverter(seg);
	
FinAlgoritmo