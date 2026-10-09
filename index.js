const nomeLanchonete = 'LancheTech'
let perguntaInicial

let nomeCliente
let nomeProduto
let quantidadeProduto
let numPedido
let precoProduto

const taxaEmbalagem = 2
const estoqueInicial = 20
let estoqueFinal
let statusPedido = null

let valorSubtotal
let valorTotal


do {
    perguntaInicial = Number(prompt(`${nomeLanchonete}\n1- Fazer pedido\n2- Status do pedido\n3- Sair`))

    if (perguntaInicial === 1) { // Validação de pedido
        nomeCliente = prompt('Digite seu nome: ')
        nomeProduto = prompt('Digite o nome do produto: ')
        quantidadeProduto = Number(prompt('Quantidade do produto: '))
        numPedido = Number(prompt('Número do pedido: '))
        precoProduto = Number(prompt('Preço do produto: '))
        estoqueFinal = estoqueInicial - quantidadeProduto
        valorSubtotal = precoProduto * quantidadeProduto
        valorTotal = valorSubtotal + taxaEmbalagem
        statusPedido = 'Em andamento'

    if (precoProduto <= 0 || quantidadeProduto <= 0) { // Validação de preço e quantidade
        alert('Tente novamente! Preço ou quantidade inválidos.')
        statusPedido = 'Cancelado'

    }

    if (estoqueInicial < quantidadeProduto) { // Validação de estoque
        alert('Tente novamente! Estoque insuficiente.')
        statusPedido = 'Cancelado'

    }

    if (valorSubtotal >= 100) { // Validação de desconto 10%
        valorTotal = (valorSubtotal * 0.9) + taxaEmbalagem

    } else if (valorSubtotal >= 50 && valorSubtotal < 100) { // Validação de desconto 5%
        valorTotal = (valorSubtotal * 0.95) + taxaEmbalagem

    }
    } else if (perguntaInicial === 2) { // Validação de status do pedido
        alert(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\nStatus do pedido: ${statusPedido}\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
    }

    if (statusPedido === 'Cancelado') {
        alert(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\nPedido cancelado!\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)

    } else if (statusPedido === 'Em andamento') {
    alert(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    ${nomeLanchonete}
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Cliente: ${nomeCliente}
    Pedido: #${numPedido}
    Produto: ${nomeProduto}
    Preço: R$${precoProduto.toFixed(2)}
    Quantidade: ${quantidadeProduto}
    Taxa de Embalagem: R$${taxaEmbalagem}
    Estoque Restante: ${estoqueFinal}
    Valor Subtotal: R$${valorSubtotal.toFixed(2)}
    Desconto aplicado: R$${(valorSubtotal - (valorTotal - taxaEmbalagem)).toFixed(2)}
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Total: R$${valorTotal.toFixed(2)}
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)

    }

} while (perguntaInicial !== 3)