/* 
Cria uma classe que simula um carrinho de compras de um e-commerce
Propriedades itens, quantidade total, valor total.
crie os metodos para adicionar e remover itens.

*/


class CarrinhoDeCompras {
    constructor() {
        this.itens = {};
        this.quantidadeTotal = 0;
        this.valorTotal = 0;
    }

    adicionarItem(item, quantidade, valorUnitario) {
        if (!this.itens[item]) {
            this.itens[item] = { quantidade: 0, valorUnitario };
        }

        this.itens[item].quantidade += quantidade;
        this.quantidadeTotal += quantidade;
        this.valorTotal += quantidade * valorUnitario;
    }

    removerItem(item, quantidade) {
        if (this.itens[item]) {
            if (quantidade >= this.itens[item].quantidade) {
                this.quantidadeTotal -= this.itens[item].quantidade;
                this.valorTotal -= this.itens[item].quantidade * this.itens[item].valorUnitario;
                delete this.itens[item];
            } else {
                this.itens[item].quantidade -= quantidade;
                this.quantidadeTotal -= quantidade;
                this.valorTotal -= quantidade * this.itens[item].valorUnitario;
            }
        }
    }
}

// Exemplo de uso:
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem('Camiseta', 2, 25.0);
carrinho.adicionarItem('Calça', 1, 50.0);

console.log(carrinho);

carrinho.removerItem('Camiseta', 1);

console.log(carrinho);
