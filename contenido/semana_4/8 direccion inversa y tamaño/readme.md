# DESCRIPCIÓN DEL PROBLEMA

Cree una función llamada ReverseDirectionAndSize que tome un texto como parámetro y lo invierta, por ejemplo: "Hola" -> "olleH" y también invierta las letras si están en mayúsculas a minúsculas y si están en minúsculas a mayúsculas, debería hacer algo. como esto:

"Hola" --> "OlLEh"

"Leonardo" --> "ODRANOEl"

"Texto" --> "TXEt"



# SOLUCIÓN DEL PROBLEMA

Funcion inversa <- p_inversa(p)
	long = Longitud(p);
	Para i<-long Hasta 0 Con Paso -1 Hacer
		char = SubCadena(p,i,i);
		Si (char == (Mayusculas(char))) Entonces
			char = Minusculas(char);
		SiNo
			char = Mayusculas(char);
		Fin Si
		inversa = Concatenar(inversa,char);
	Fin Para
	
FinFuncion

Algoritmo direccion_inversa_tamanio
	Definir palabra Como Caracter;
	Escribir "Ingrese la una palabra";
	Leer palabra;
	
	Escribir p_inversa(palabra);
FinAlgoritmo