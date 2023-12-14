function telefone_validation(telefone) {

    telefone = telefone.replace(/\D/g, '');

    if (!(telefone.length >= 10 && telefone.length <= 11)) return false;


    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;

    for (var n = 0; n < 10; n++) {

        if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
    }

    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];

    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;


    if (new Date().getFullYear() < 2017) return true;
    if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;

    return true;
}


function validateFields() {

    const email = document.getElementById("Email").value;
    if (!email) {
        document.getElementById("recover-button").disabled = true;
        document.getElementById("email-required-error").style.display = "block";
    }
    else if (validateEmail(email)) {
        document.getElementById("recover-button").disabled = false;
        document.getElementById("email-required-error").style.display = "none";
    }
    else {
        document.getElementById("recover-button").disabled = true;
        document.getElementById("email-required-error").style.display = "block";
    }
    const celular = document.getElementById("Celular").value;
    if (telefone_validation(celular)) {
        document.getElementById("celular-required-error").style.display = "none";
    }
    else {
        document.getElementById("celular-required-error").style.display = "block";
    }

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


function calcularIMC() {
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    let imc = 0.0;


    if (altura && peso) {
        imc = (peso / (altura * altura)) * 10000;
        console.log('IMC:', imc);

    } else {
        alert('Preencha altura e peso para calcular o IMC.');
    }

    informacaoIMC = document.getElementById('informacaoIMC');
    informacaoIMC.innerHTML = "<pre>" + imc + "</pre>";
}


function gerarJson() {
    let nome = document.getElementById('Nome').value;
    let endereco = document.getElementById('Endereco').value;
    let celular = document.getElementById('Celular').value;
    let email = document.getElementById('Email').value;
    let altura = document.getElementById('Altura').value;
    let peso = document.getElementById('Peso').value;
    let imc = 0.0;
    if (altura && peso) {
        imc = (peso / (altura * altura)) * 10000;
        console.log('IMC:', imc);
    } else {
        alert('Preencha altura e peso para calcular o IMC.');
    }

    const jsonData = {
        Nome: nome,
        Endereco: endereco,
        Celular: celular,
        Email: email,
        Altura: altura,
        Peso: peso,
        Imc: imc,
    };


    function formatJson(jsonData) {
        let formattedData = JSON.stringify(jsonData, null, 4);
        return formattedData;
    }

    informacoesObjeto = document.getElementById("informacoesObjeto");
    informacoesObjeto.innerHTML = "<pre>" + formatJson(jsonData) + "</pre>";
}
