/*
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o seu nome: ")
   leia(nome)
   escreval("Digite a sua idade: ")
   leia(numero)
   
   escreval(nome, " tem ", numero, " anos.")
*/

var nome, numero;

nome = prompt("Digite o seu nome: ");
numero = prompt("Digite a sua idade: ");

document.getElementById("paragrafo").innerText = nome + " tem " + numero + " anos.";