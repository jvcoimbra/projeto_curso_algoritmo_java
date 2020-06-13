/*
Var
// Seção de Declarações das variáveis 
   resultado, valor01, valor02, valor03: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   valor01 := 10
   valor02 := 10
   valor03 := 10
   resultado := ((valor01 + valor02 + valor02) / valor03) % 2
   // % significa "resto", o resultado da equação é 3. O "resto" de 3 para 2 é igual a 1
   escreval ("Resultado: ", resultado)
*/

var resultado, valor01, valor02, valor03;

valor01 = 10
valor02 = 10
valor03 = 10

resultado = ((valor01 + valor02 + valor02) / valor03) % 2
// % significa "resto", o resultado da equação é 3. O "resto" de 3 para 2 é igual a 1
alert ("Resultado: " + resultado)