function newFunction(name, age, country) {
    var name = name || 'Francisco';
    var age = age || 22;
    var country = country || 'Ecuador';
    console.log(name, age, country);
}

// ES6
// 1.- Default Params
function withES6(name = 'Francisco', age = 22, country = 'Ecuador') {
    console.log(name, age, country);
}

newFunction();
newFunction('Juan', 23, 'España');
console.log('---------------------');
withES6();
withES6('Pedro', 23, 'España');

//2.- Template String
let hello = 'Hello';
let world = 'World';
let normalPhrase = hello + ' ' + world; //After
let epicPhrase = `${hello} ${world}`;  //Before
console.log(normalPhrase)
console.log(epicPhrase)

// 3.- Multiline
let lorem = 'Lorem ipsum dolor sit amet, consectetur \n'
    + 'otra frase épica';
console.log(lorem)

let lorem2 = `Lorem ipsum dolor sit amet, consectet
y asi se hace con templates strings`;
console.log(lorem2)

//4.- Destructuring

let person = {
    'name': 'John',
    'age': 34,
    'country': 'ES'
}

console.log(person.name, person.age);
let { name, age } = person;
console.log(name, age);

//5.- Spread Operator

let team1 = ['John', 'Maria'];
let team2 = ['Jose', 'Pedro'];
let bigTeam = ['Francisco', ...team1, ...team2];
console.log(bigTeam);

//6.- Var, Let, Const
//Esto de aqui son las formas que se usan para declarar variables,la palabra 'var' no se recomienda usarla actualmente en Javascript