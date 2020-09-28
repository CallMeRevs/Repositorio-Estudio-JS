console.log("Esto es un mensaje en consola.");
alert("Esto es una alerta.");
document.write("<h1>Esto es un header insertado desde JS.</h1>");
console.error("Mi error customizado. Esto es un mensaje de errores.");

/*
  Data Types
  "Hello, World!" // String
  'Hello, World!' // String
  102 // Number
  102.5 // Number
  false // Boolean
  true // Boolean

  //Array
  ['Joe','Ryan','Martha']
  [1,2,3,4,5]
  [true,false,true]

  // Objects ("Key" : Value)
  {
    "userName" : 'Joe',
    "score" : 70.4,
    "hours" : 14,
    "competitive" : true,
    "friends" : ['Martin','Joana','Luis']
  }
*/

// Variables
var userName; // Declaración de variable con alcance de función
userName = 'John'; // Asignación
let lastName = 'Carter'; // Declaración e inicialización de variable con alcance de bloque
const PI = 3.141592; // Declaración de constantes
console.log(userName);
console.log(lastName);
console.log(PI);

// Operadores aritméticos
var numberOne,numberTwo,sum,sub,mul,div,mod,pow;
numberOne = 5;
numberTwo = 32.89;
sum = numberOne + numberTwo; // Suma
sub = numberOne - numberTwo; // Resta
mul = numberOne * numberTwo; // Multiplicacion
div = numberOne / numberTwo; // Division
mod = numberOne % numberTwo; // Módulo
pow = numberOne ** 2; // Potenciación
// Operadores artiméticos compuestos
/*
  Increment x++ x = x + 1
  Decrement x-- x = x - 1
  Addition assignment 	x += y 	x = x + y
  Subtraction assignment 	x -= y 	x = x - y
  Multiplication assignment 	x *= y 	x = x * y
  Division assignment 	x /= y 	x = x / y
  Remainder assignment 	x %= y 	x = x % y
  Exponentiation assignment 	x **= y 	x = x ** y
  Left shift assignment 	x <<= y 	x = x << y
  Right shift assignment 	x >>= y 	x = x >> y
  Unsigned right shift assignment 	x >>>= y 	x = x >>> y
  Bitwise AND assignment 	x &= y 	x = x & y
  Bitwise XOR assignment 	x ^= y 	x = x ^ y
  Bitwise OR assignment 	x |= y 	x = x | y
  Logical AND assignment 	x &&= y 	x && (x = y)
  Logical OR assignment 	x ||= y 	x || (x = y)
  Logical nullish assignment 	x ??= y 	x ?? (x = y)
*/


// Concatenación de String
var nombre,apellido,nombreCompleto;
nombre = 'Juan';
apellido = 'Lopez';
nombreCompleto = nombre + ' ' + apellido; // Concatenación
console.log(nombreCompleto);

// Operadores relacionales
console.log(3>1); // Mayor que
console.log(3<1); // Menor wue
console.log(3>=1); // Mayor o igual que
console.log(3<=1); // Menor o igual que
console.log(3!=1); // Diferente que (valor)
console.log(3!==1); // Diferente que (valor y tipo)
console.log(1=='1'); // Igual que (valor)
console.log(1==='1'); // Igual que (valor y tipo)

// Operadores lógicos
console.log(!false); // NOT
console.log(true && false); // AND
console.log(true || false); // OR

// Control de flujo condicional
let passwordUsuario = '12345';
let inputPassword = '12345';
var comparacion = false;
let typeCard = 'Visa';
if(passwordUsuario == inputPassword){ // Condicional IF
  console.log("Acceso con éxito.");
}
else{
  console.log("Contraseña incorrecta.");
}
comparacion = (passwordUsuario == inputPassword) ? true : false; // Operador ternario
console.log(comparacion);
switch (typeCard) { // Estructura Switch
  case 'Visa':{
    console.log('Es una tarjeta Visa.');
    break;
  }
  case 'Master Card':{
    console.log('Es una tarjeta Master Card.');
    break;
  }
  default:{
    console.log('No se encontraron coincidencias.');
    break;
  }
}

// Bucles
let contador = 0;
while(contador < 5){ // Ciclo While
  console.log(contador);
  contador++;
}
contador = 0;
do{ // Ciclo Do-While
  console.log('Hello, World! ' + contador);
  contador++;
}while(contador < 5);
contador = 0;
let nombres = ['Luis','Martin','Jose'];
for (var i = 0; i < nombres.length; i++){ // Ciclo For
  document.write(nombres[i]+"</br>");
}

// Funciones
var nombre = 'Ernesto';
greetingNombre('Ernesto'); // Llamado a funcion con argumentos
greeting(); // Llamado a función sin argumentos
function greetingNombre(nombre){ // Funcion con parámetros de paso por valor
  console.log("Hola, " + nombre + ". ¿Cómo estás?");
  return;
}
function greeting(){ // Función sin parámetros
  console.log("Hola, ¿Cómo estás?");
  return;
}
// Los primitivos se pasan por valor y los arreglos u objetos se pasan por referencia
