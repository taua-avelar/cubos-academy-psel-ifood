
function solucao(primeiraLetra, segundaLetra, palavras) {
    let count = 0
	for (let palavra of palavras) {
        if (palavra[0] == primeiraLetra && palavra[1] == segundaLetra) {
            console.log(palavra)
            count ++
        }
    }
        if (count == 0) {
            console.log('NENHUMA')
    }
    

}