//METODOS

//Propriedades que servem como funcoes
//ou seja
//invocamos os metodos da mesma maneira que funcoes


let cachorro = {
    latir: function () {
        console.log("Au Au");
    }
}

cachorro.latir();

//Normalmento os metodos interagem com os objetos
// ate mudando os valores das suas propriedades para 
//corresponder a logica do progrmaa desenvolvido

let pessoa = {
    nome: '',
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
    getNome: function () {
        return this.nome;
    }
}

pessoa.setNome("Matheus");

console.log(pessoa.getNome());
