var nome, numero

nome = prompt("Digite o seu nome: ");
numero = prompt("Digite a sua idade: ");

document.getElementById("paragrafo").innerText = nome + " tem " + numero + " anos.";