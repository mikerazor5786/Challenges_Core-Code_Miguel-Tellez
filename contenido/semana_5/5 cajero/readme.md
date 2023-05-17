# DESCRIPCIÓN DEL PROBLEMA

crear una función llamada "cajero" que pretenda ser un panel de un banco debe mostrar el texto: "seleccione una opción: a. depositar. b. retirar. c. salir". y tendrá un valor llamado saldo que regresará al terminar y lo imprimirá en pantalla, su valor inicial será 1000. Debe repetir el menú hasta seleccionar la opción 'c'

si seleccionamos 'a' invoca otra función llamada 'depositar' que mostrará un texto en pantalla que dirá 'cuánto quieres depositar', agregará ese valor al saldo y terminará la función.

si seleccionamos 'b' invoca otra función llamada 'retirar' que mostrará un texto en pantalla que dirá 'cuánto quieres retirar': restará ese valor del saldo y finalizará la función.

"seleccione una opción: a. depositar. b. retirar. c. salir."

un -->

"cuánto quieres depositar:"

500 -->

"seleccione una opción: a. depositar. b. retirar. c. salir."

segundo -->

"cuanto quieres retirar:"

1400 -->

"seleccione una opción: a. depositar. b. retirar. c. salir."

do -->

100



# SOLUCIÓN DEL PROBLEMA

SubProceso op_cajero()
	Definir monto,monto_total Como Real;
	Definir op Como Caracter;
	Definir contador, ini_monto Como Entero;
	monto_acum = 0;
	
	Repetir
		Escribir "Ingrese el monto que desee"
		Leer monto;
		Escribir " a ------> DEPOSITO ";
		Escribir " b ------> RETIRO ";
		Escribir " c ------> SALIR ";
		Escribir "Seleccione una opcion";
		leer op;
		
		Segun op Hacer
			'a':
				Si (contador < 1) Entonces
					ini_monto = 1000;
					monto_total = monto + ini_monto;
					Escribir "Su saldo es de: ",monto_total;
					
				SiNo
					si (cont_retiro == 1) Entonces
						ini_monto = 1000;
						monto_total = monto + ini_monto;
						Escribir "Su saldo es de: ",monto_total;
					SiNo
						monto_total = monto_total + monto;
						Escribir "Su saldo es de: ",monto_total;
					FinSi					
				Fin Si
				
			'b':
				si (contador < 1) Entonces
					ini_monto = 1000;
					si (monto <= ini_monto) Entonces
						monto_total = ini_monto - monto;
						Escribir "Su saldo es de: ",monto_total;
						cont_retiro = cont_retiro + 1;
					SiNo
						Escribir "Imposible realizar transaccion monto mayor a saldo";
						cont_retiro = cont_retiro + 1;
					FinSi
				SiNo
					si (monto < monto_acum) Entonces
						monto_total = monto_total - monto;
						Escribir "Su saldo es de: ",monto_total;
						cont_retiro = cont_retiro + 1;
					SiNo
						Escribir "Imposible realizar transaccion monto mayor a saldo";
						cont_retiro = cont_retiro + 1;
					FinSi
				FinSi
		
		Fin Segun
		monto_acum = monto_aux + monto_total
		contador = contador +1;
	Hasta Que ((op == 'c') | (op == 'C'))
	Escribir "Su saldo final es de: ",monto_acum;
FinSubProceso

Algoritmo cajero
	op_cajero();
FinAlgoritmo
	