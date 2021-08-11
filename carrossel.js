

function solucao(sequencia) {
    carrosel = 0
	for (comando of sequencia) {
        if (comando == '>') {
            if (carrosel < 6 ) {
                carrosel ++
            }
            else {
                carrosel = 0
            }
        }
         
        if (comando == '<') {
            if (carrosel > 0) {
                carrosel --
            }
            else {
                carrosel = 6
            }
        }
    }
    console.log(carrosel)

}