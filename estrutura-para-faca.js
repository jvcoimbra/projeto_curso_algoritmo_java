function acaoBotao() {
    var numero, fatorial

    numero = prompt("Digite o número para calcular seu fatorial: ")
    fatorial = 1

    // contador = 1 significa que o contador inicia com 1
    //contador <= numero faz o loop parar quando contador atinge o valor do numero
    //contador++ soma 1 ao contador no final do loop

    for (contador = 1; contador <= numero; contador++) {
        fatorial *= contador;
    }
    
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}