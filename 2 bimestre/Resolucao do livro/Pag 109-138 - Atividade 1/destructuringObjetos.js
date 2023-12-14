//Podemos definir variaveis com propiedades do objeto com uma notacao diferente. 
//chamada destructuring;

const person = {
    name: 'Jhon',
    lastname: 'Doe'
};

const {
    name: fname,
    lastname: lname,
} = person;

console.log(fname);
console.log(lname);