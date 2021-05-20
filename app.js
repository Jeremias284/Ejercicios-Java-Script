
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

/*Ejercicio 8:Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var cadenaNueva;
var cadena = 'palabra larga con espacios';
cadenaNueva = cadena.indexOf();
console.log(cadenaNueva);

/*Ejercicio 9: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar 
indexOf, substring, toUpperCase, toLowerCase y el operador +). */
var cadenaNueva;
var cadena = 'psicologia sociologia ';
cadenaNueva = cadena.substring(0,1).toUpperCase() + cadena.substring(1,10).toLowerCase() + cadena.substring(11,12).toUpperCase() + cadena.substring(12,21).toLowerCase();
console.log(cadenaNueva);

/*Ejercicio 10: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 
y 11 (utilizar console.log)*/
var arregloNuevo, mesCinco,mesOnce;
var arreglo= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mesCinco = arreglo[4];
mesOnce = arreglo[10];
console.log(mesCinco + mesOnce);

/* Ejercicio 11: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).  */
var arreglo= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(arreglo.sort());

/*Ejercicio 12  Agregar un elemento al principio y al final del array (utilizar unshift y push).  */
var arreglo= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arreglo.unshift('Inicio');
arreglo.push('Fin');
console.log(arreglo);

/*Ejercicio 13: Quitar un elemento del principio y del final del array (utilizar shift y pop)    */
var arreglo= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arreglo.shift();
arreglo.pop();
console.log(arreglo);

/*Ejercicio 14: Invertir el orden del array (utilizar reverse)*/
var arreglo= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arreglo.reverse();
console.log(arreglo);

/*Ejercicio 15: Unir todos los elementos del array en un único string donde cada mes este separado por un 
guión - (utilizar join).*/
var arreglo= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(arreglo.join('-'));

/*Ejercicio 16 Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
var arreglo= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var nuevo = arreglo.slice(4, 11);
console.log(nuevo);

/*Ejercicio 17:Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor 
o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el 
mensaje “Lower than 0,5” */

var numero =  Math.random();
if (numero <= 0.5)
{
console.log("Lower than 0,5");
}
else{
console.log("Greater than 0,5");
}
console.log(numero);

/*Ejercicio 18:  Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes 
mensajes de alerta:
i) “Bebe” si la edad es menor a 2 años
ii) “Nino” si la edad es entre 2 y 12 años
iii) “Adolecente” si la edad es entre 13 y 19 años
iv) “Joven” si la edad está entre 20 y 30 años
v) “Adulto” entre 31 y 60 años
vi) “Adulto mayor” entre 61 y 75 años
vii) “Anciano” si es mayor a 75 años */
var Age = Math.floor(Math.random()* 101);
if(Age <2)
{
    console.log("Bebe");
}
if(Age > 2 && Age <12)
{
    console.log("Niño");
}
if(Age > 13 && Age <19)
{
    console.log("Adolecente");
}
if(Age > 20 && Age  < 30)
{
    console.log("Joven");
}
if(Age > 31 && Age  < 60)
{
    console.log("Adulto");
}
if(Age > 61 && Age  < 75)
{
    console.log("Adulto Mayor");
}
else{
    console.log("Anciano")
}
console.log(Age);

/*Ejercicio 19: Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de 
JavaScript para mostrar una alerta utilizando cada una de las palabra */

var arreglo= ["Pato", "Gato", "Perro", "Loro", "Pez"];
for( var i = 0; i < arreglo.length; i ++)
{
      console.log(arreglo [i]);
}

/*Ejercicio 19: Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta 
por cada palabra modificada */

var arreglo= ["pato", "gato", "perro", "loro", "pez"];
for( var i = 0; i < arreglo.length; i ++)
{
    cadenaNueva = cadena.substring(0,1).toUpperCase() + cadena.substring(1,4).toLowerCase()
+                cadena.substring(4,5).toUpperCase() + cadena.substring(5,8).toLowerCase()
+                cadena.substring(9,10).toUpperCase() + cadena.substring(10,13).toLowerCase()
+                 cadena.substring(14,15).toUpperCase() + cadena.substring(15,18).toLowerCase()
+                 cadena.substring(19,20).toUpperCase() + cadena.substring(20,21).toLowerCase();
   console.log(arreglo [i]);
}

/*Ejercicio 20 Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al 
final mostrar una única alerta con la cadena completa*/

var sentence;
var arreglo= ["Pato", "Gato", "Perro", "Loro", "Pez"];
for( var i = 0; i < 1; i ++)
{
    sentence = arreglo.slice();
    console.log(sentence );
}

/*Ejercicio 21 Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la 
repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro 
del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array 
final (utilizar console.log */

    var arreglo = [];
    for( var i = 0; i < 10 ; i ++)
    {
        console.log(`${i}`);
    }

    /*Ejercicio 22: Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la 
función y guardar el resultado en una variable, mostrando el valor de dicha variable en la 
consola del navegador   */
var uno, dos, suma;
uno = 4;
dos = 9;
suma = uno + dos;
console.log(suma);

/*Ejercicio 23: A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros 
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y 
retornar el valor NaN como resultado.   */
if(isNaN(uno))
{
    console.log('Error: NaN');
}
else
{
    console.log('es un numero');
}
if(isNaN(dos))
{
    console.log('Error: NaN');
}
else
{
    console.log('es un numero');
}

if(isNaN(suma))
{
    console.log('Error: NaN');
}
else
{
    console.log('es un numero');
}

/*Ejercicio 24: Crear una función validate integer que reciba un número como parámetro y devuelva verdadero 
si es un número entero.   */
var numPrueba;
numPrueba = 5.2;
if (numPrueba % 1 == 0) 
    {
        console.log('verdadero');
    } 
    else 
    {
        console.log('falso');
    }
/*Ejercicio 25:  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean 
enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número 
convertido a entero (redondeado).  */
if(uno % 1 == 0)
{
    console.log('entero');
} 
else 
{
    console.log('no entero');
    console.log(Math.round(uno));
}

if(dos % 1 == 0)
{
    console.log('entero');
} 
else 
{
    console.log('no entero');
    console.log(Math.round(dos));
}

if(suma % 1 == 0)
{
    console.log('entero');
} 
else 
{
    console.log('no entero');
    console.log(Math.round(suma));
}