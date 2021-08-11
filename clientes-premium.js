

function solucao(precos) {
    let total = 0
    let produtoMais200 = false
    for (let preco in precos) {
        total += precos[preco]
        if (precos[preco] > 200) {
            produtoMais200 = true
        }
    }
    if (total > 1000) {
        if (produtoMais200) {
            console.log('PREMIUM')
        }
        else {
            console.log('VIP')
        }
    }
    else {
        console.log ('NORMAL')
    }
}