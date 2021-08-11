
function solucao(cor1, cor2) {
    if (cor1 === cor2) {
        console.log(cor1)
    }
    else if (cor1 == 'vermelho' && cor2 == 'amarelo' || cor2 == 'vermelho' && cor1 == 'amarelo') {
        console.log('laranja')
    }
    else if (cor1 == 'vermelho' && cor2 == 'azul' || cor2 == 'vermelho' && cor1 == 'azul') {
        console.log('roxo')
    }
    else if (cor1 == 'azul' && cor2 == 'amarelo' || cor2 == 'azul' && cor1 == 'amarelo') {
        console.log('verde')
    }

}