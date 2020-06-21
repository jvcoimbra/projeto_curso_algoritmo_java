function acaoBotao() {
    var s = "saveChangesInTheEditor";
    var arr = s.split(/[A-Z]/g)
    var res = arr.length

    document.getElementById("paragrafo").innerText = res;
}