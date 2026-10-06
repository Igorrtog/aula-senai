const nomeLanchonete = 'LancheTech'
let nomeCliente = 'Aaliyah Samara'
let numPedido = 1001
let nomeProduto = 'Hambúrguer Artesanal'
let precoProduto = 18.50
let quantidade = 2

console.log(`${nomeLanchonete}\nNome: ${nomeCliente}\nPedido: ${numPedido}\nProduto: ${nomeProduto}\nPreço: R$${precoProduto.toFixed(2)}\nQuantidade: ${quantidade}\nTotal: R$${(precoProduto * quantidade).toFixed(2)}`)

