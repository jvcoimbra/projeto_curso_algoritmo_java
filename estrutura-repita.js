/*
valor01, valor02: real
   sairloop: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   repita
       escreva("Digite o primeiro valor: ")
       leia(valor01)
       escreva("Digite o segundo valor: ")
       leia(valor02)
       escreval("Resultado: ", valor01 + valor02)
       escreval("Deseja sair? S/N")
       leia(sairloop)
   ate sairloop <> "N"
*/

function acaoBotao () {
    var valor01, valor02, sairloop;
    
    do{
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor01) + parseInt(valor02))
        sairloop = prompt("Deseja sair? S/N")  
    }while (sairloop == "N")
}   