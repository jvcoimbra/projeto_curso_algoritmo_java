function acaoBotao() {
    var brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204] //array inicial
    var arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206] //array com números faltando
    var newArray = [] //nova array identificando os números faltantes

    //loop para transformar os números em ordem crescente e identificar a quantidade, caso haja repetição
    for (var i = 0; i < brr.length; i++) {
        if (newArray[brr[i]] == undefined )
            newArray[brr[i]] = 0
        newArray[brr[i]] += 1
    }

    //loop para identificar quais os números que estão faltando
    for (var i = 0; i < arr.length; i++) {
        newArray[arr[i]] -= 1
    }

    //função para usar no map() e transformar os valores diferentes de 0 em seus respectivos index
    function fn_map(value, index, array){
        if (value != 0)
            return index
    }

    //função para usar no filter() e filtar os valores maiores que 0
    function fn_filter(value, index, array){
        if (value > 0)
            return index
    }
    
   document.getElementById("paragrafo").innerText = newArray.map(fn_map).filter(fn_filter);
}