const calculadora = {
    somar: function (a, b) {
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multiplicar: function (a, b) {
        return a * b;
    },
    dividir: function (a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Não é possível dividir por zero.";
        }
    }
};

// Exemplos de uso:
console.log(calculadora.somar(5, 3));
console.log(calculadora.subtrair(7, 2));
console.log(calculadora.multiplicar(4, 6));
console.log(calculadora.dividir(8, 2));
console.log(calculadora.dividir(6, 0)); 
