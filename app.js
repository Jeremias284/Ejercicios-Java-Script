
/*Ejercicio 1: Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de 
ambos números en una 3er variable.*/
 var numUno = 10;
 var numDos = 20;
 var numResultadoSuma = numUno + numDos ;


/*Ejercicio 2: Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var primeraPalabra ='palabraUno';
var segundaPalabra = 'palabraDos';
var tercerPalabra = primeraPalabra + segundaPalabra;

/*Ejercicio 3: Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado la suma una 3er variable (utilizar length).*/
var palabraUnoo = 'palabraUnoo';
var palabraDoss = 'palabraDoss';
var palabraTress = palabraUnoo.length + palabraDoss.length;
console.log(palabraTress);



/*Ejercicio 4: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
mayúscula (utilizar toUpperCase). */
var palabra = 'palabraConMasDeDiezLetras'
console.log(palabra.toUpperCase());


/*Ejercicio 5: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var cadenaNueva;
var cadena = 'palabraLarga';
cadenaNueva = cadena.substring(0,5);
console.log(cadenaNueva);

/*Ejercicio 6:Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring)*/
var cadenaNueva;
var cadena = 'palabraLarga';
cadenaNueva = cadena.substring(9,12);
console.log(cadenaNueva);

/*Ejercicio 7: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva 
variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */
var cadenaNueva;
var cadena = 'palabraLarga';
cadenaNueva = cadena.substring(0,1).toUpperCase() + cadena.substring(1,12).toLowerCase();
console.log(cadenaNueva);




