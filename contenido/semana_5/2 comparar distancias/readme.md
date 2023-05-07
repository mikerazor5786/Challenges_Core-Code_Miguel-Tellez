# DESCRIPCIÓN DEL PROBLEMA

Cree una función llamada compareDistances que pida 5 números, estos pueden ser positivos o negativos, sume los positivos con positivos y los negativos con negativos, la función debe devolver verdadero si hay más distancia a 0 con positivos o falso si la distancia es mayor con negativos

4, 12, 100, 8, -60 --> verdadero

40, 120, 10, -80, -91 --> falso


# SOLUCIÓN DEL PROBLEMA 

SubProceso comparacion_distancia (distan)

	Definir acum_neg, acum_pos Como Real;
	acum_neg =0;
	acum_pos =0;
	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Si distan[i] < 0 Entonces
			acum_neg = acum_neg + distan[i];
		SiNo
			acum_pos = acum_pos + distan[i];
		Fin Si
	FinPara
	acum_neg = abs(acum_neg);
	Si (acum_neg < acum_pos) Entonces
		Escribir "VERDADERO";
	SiNo
		Escribir "FALSO";
	Fin Si
FinSubProceso

Algoritmo distancia_comparada
ñ
	definir distancias Como Entero;
	Dimension distancias[5];
	
	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Escribir "Ingrese la ",(i),"o. distancia positiva o negativa";
		Leer distancias[i];
	Fin Para
	comparacion_distancia(distancias);
FinAlgoritmo