//o Reduce pode fazer uma função de agregação ou se comportar 
//como map ou filter:

var valores = [1.5, 2, 4, 10];

var calc = function (total, item) {
     return total + item;
}

var somatoria = valores.reduce(calc);
console.log(somatoria);

 //adicionando o calculo da média com ajuda do reduce pra somar tudo:

 var valores = [1.5, 2, 4, 10];

var calc = function (total, item) {
     return total + item;
}

var somatoria = valores.reduce(calc);
var media = somatoria/ valores.length;

console.log(media);

// reduce simmulando um Map que dobra os valores do array:
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var calc = function (total, item) {
    return total.concat(item * 2);
}

var dobrados = numeros.reduce(calc, []); // [] é pra começar com array no reduce.
console.log(dobrados);

//reduce simulando um filter que filtra números maiores que 10:

var numeros = [10, 18, 1, 15];

var selecionados = numeros.reduce(function (total, item) {
    if (item >10) {
        total.push(item);
    }
    return total;
}, []);

console.log(selecionados);