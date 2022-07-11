//exemplo bruto de como fazer o trabalho do filter manualmente.

//filtrando números maiores de 10
var numeros = [10, 18, 1, 15];
var resultado = [];

for ( i = 0; i < numeros.length; i++) {
   if (numeros[i] > 10) {
      resultado.push(numeros[i]);
   };
    
}

console.log(resultado);

// USANDO O FILTER:

var numeros = [10, 18, 1, 15];
/*
var maiorQ10 = function (item) {
    if (item > 10) {
        return true;
    } else {
        return false;
    }
}
*/
var novosNumeros = numeros.filter(function (item) {
    return item > 10;
});
console.log(novosNumeros);

// Filtrando nomes pela primeira letra:

var nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];

var convidados =  nomes.filter(function (item) {
    return item.charAt(0) == "Z";
});

console.log(convidados);

// Filtrando objetos:

var filmes = [
    {titulo: "Titanic", duracao: 195, nota: 7.5},
    {titulo: "The Avengers", duracao: 203, nota: 9.5},
    {titulo: "Bean", duracao: 90, nota: 6.5}
]

var notaCorte = 8;

var bons = function (item) {
    return item.nota >= notaCorte;
}

var ruins = function (item) {
    return item.nota < notaCorte;
}

var filmesBons = filmes.filter(bons);
var filmesRuins = filmes.filter(ruins);

console.log(filmesBons);
console.log(filmesRuins);