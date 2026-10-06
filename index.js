const nomeLanchonete = 'LancheTech'
let nomeCliente = prompt('Digite seu nome: ')
let nomeProduto = prompt('Produto deseja pedir: ')
let quantidade = Number(prompt('Quantos vai querer? '))
let numPedido = Number(prompt('Qual o número do pedido? '))
let precoProduto = 18.50

console.log(`${nomeLanchonete}\nNome: ${nomeCliente}\nPedido: ${numPedido}\nProduto: ${nomeProduto}\nPreço: R$${precoProduto.toFixed(2)}\nQuantidade: ${quantidade}\nTotal: R$${(precoProduto * quantidade).toFixed(2)}`)
