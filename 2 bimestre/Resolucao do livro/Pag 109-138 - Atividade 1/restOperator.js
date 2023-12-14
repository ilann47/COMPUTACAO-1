//Uma forma de uma funcao receber  indefinidos parametros
//o operador rest vai virar um array

//o parametro e definido por: nome

function imprimirNumeros(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

