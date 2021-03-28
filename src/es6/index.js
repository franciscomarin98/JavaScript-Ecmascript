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
let  hello = 'Hello';
let world = 'World';
let normalPhrase = hello+ ' ' + world;
let epicPhrase = `${hello} ${world}`;
console.log(normalPhrase)
console.log(epicPhrase)