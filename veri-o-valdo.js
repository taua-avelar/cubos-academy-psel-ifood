function solucao(obras) {
    let nome = ''
    let preco = 0
    for (let obra of obras) {
        if (preco == 0 || obra.valor > preco) {
            preco = obra.valor
            nome = obra.nome
        }
    }
    console.log(nome)
    
}

