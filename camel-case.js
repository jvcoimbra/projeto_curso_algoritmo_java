function acaoBotao() {
    var s = "saveChangesInTheEditor" //string inputada
    var arr = s.split(/[A-Z]/g) //transforma a string em um array separando pelas letras maiúsculas, mas apaga essas letras
    var res = arr.length //retona o tamanho da array criada, ou seja, a quantidade de palavras

    document.getElementById("paragrafo").innerText = res;
}