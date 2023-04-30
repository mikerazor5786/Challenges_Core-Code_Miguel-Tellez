# DESCRIPCIÓN DEL PROBLEMA




# SOLUCIÓN DEL PROBLEMA

Algoritmo lanzando_moneda 
	
	Definir nom1,nom2 Como Caracter;
	Definir monto1,monto2 Como Real;
	Definir jugador1,jugador2 Como Entero;
	
	Escribir "Ingrese el nombre del primer jugador";
	Leer nom1;
	Escribir "Ingrese el monto del primer jugador";
	Leer monto1;
	Escribir "Ingrese el nombre del segundo jugador";
	Leer nom2;
	Escribir "Ingrese el monto del primer jugador";
	Leer monto2;
		
	jugador1 = Aleatorio(0,1);
	jugador2 = Aleatorio(0,1);
	
	Si (((monto1 == 0) & (monto2 == 0))) Entonces
		Escribir "Los jugadores ",Mayusculas(nom1)," y ",Mayusculas(nom2)," hicieron trampa";
		Escribir "EL JUEGO A SIDO CANCELADO PORQUE LOS MONTOS DEBEN SER MAYORES A 0";
	SiNo
		Si ((monto1<0) & (monto2 == 0)) Entonces
			Escribir "Los jugadores ",Mayusculas(nom1)," y ",Mayusculas(nom2)," hicieron trampa";
			Escribir "EL JUEGO A SIDO CANCELADO PORQUE LOS MONTOS DEBEN SER MAYORES A 0";
		SiNo
			Si ((monto1==0) & (monto2 < 0)) Entonces
				Escribir "Los jugadores ",Mayusculas(nom1)," y ",Mayusculas(nom2)," hicieron trampa";
				Escribir "EL JUEGO A SIDO CANCELADO PORQUE LOS MONTOS DEBEN SER MAYORES A 0";
			SiNo
				Si ((monto2 < 0) | (monto2 == 0)) Entonces
					Escribir "El jugador ",Mayusculas(nom2)," hizo trampa";
					Escribir "El jugador ganador es: ",Mayusculas(nom1)," monto ganado: ",monto1;
				SiNo
					Si ((monto1 < 0) | (monto1 == 0)) Entonces
						Escribir "El jugador ",Mayusculas(nom1)," hizo trampa";
						Escribir "El jugador ganador es: ",Mayusculas(nom2)," monto ganado: ",monto2;
					SiNo
						Si (jugador1 < jugador2) Entonces
							Escribir "El jugador ganador es: ",Mayusculas(nom2)," monto ganado: ",monto2;
						SiNo
							Escribir "El jugador ganador es: ",Mayusculas(nom1)," monto ganado: ",monto1;
						Fin Si
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
FinAlgoritmo