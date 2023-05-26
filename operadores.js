/*

Operadores

Los operadores nos permiten realizar una operacion en uno o varios operandos (variables de datos)

-Operadores de asignacion
-Operadores de cadenaa
-Operadores Logicos
-Operadores de comparacion
-Operadores arirmeticos

Operadores de asignacion(=)

los operadores de asignacion (=) se utilizan para asignarle valor a una variable. Asigna un valir al operando de la izquierda basado en el valor del operador



*/

//Operadores de asignacion 

let edadFelipe = 31;
var recipiente = "cafe";

/*

Operadores de comparacion (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de compararcion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus valores


*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";
let veinticinco = 25;

//Operador menor que
console.log("El valor 13 es menor que el valor 25? " + (numero1<numero2)); 

//Operador mayor que
console.log("El valor 13 es menor que el valor 25? " + (numero1>numero2));

//Operador mayor o igual que
console.log("El valor 25 es mayor o igual que el valor 25? " + (numero2>=numero3));

//Operador de igualdad solo evaluea valores
console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));

//Operador de igual estricta (evalua el valor y evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));

//Otro ejemplo de operador de igualdad estricta
console.log("El valor 25 es igual que el valor 25? " + (25 === "veinticinco"));

//Operador de desigualdad (!=)
console.log("El valor 13 no es igual al valor 25? " + (numero2 != numero3));

//Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? " + (numero2 !== numero3));

/*
Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).


AND (&&)

Sirve para determinar si dos expresiones son verdaderas. 

    - Si ambas expresiones son verdaderas, el resultado es verdadero. 
    - Si una de las dos expresiones es falsa, todo el resultado es falso.




OR (||)

Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.



NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo


*/
/*
//Ejemplo con AND (&&)

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 > num2); //false
afirmacion2 = (num1 != num2); //verdadero

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas afirmaciones son verdaderas


//Ejemplo con OR (||)
afirmacion3 = (num1 < num2); //verdadero
afirmacion4 = (num1 !== num2); //verdadero

console.log(afirmacion3 || afirmacion4); 


//Ejemplo con NOT (!)
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso
*/

//Ejercicio de combinacion de operaciones
/*
num1 = 12;

num2 = 24;

num3 = 25;

num4 = 92;

num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op);
*/
//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

console.log(op);

/*
*
num5 si es mayor a num2 asi que es true
num4 no es menor al num3 asi que es false
como las primeras dos comparaciones no son true entonces todo es false
*

*
num1 y num2 no sonestrictamente iguales asi que es true
num3 y num3 si son iguales asi que es false
como uno es true y el otro es false toda la comparacion es true

*

*
Como la primera comparacion && no es igual es false, pero como una de las segundas comparaciones son true y la comparacion general de las dos menores comparaciones tambien tiene true entonces op = true */