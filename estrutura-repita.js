function acaoBotao() {
    var valor01, valor02, sairloop
    
    do{
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor01) + parseInt(valor02))
        sairloop = prompt("Deseja sair? S/N")  
    }while (sairloop == "N")
}   