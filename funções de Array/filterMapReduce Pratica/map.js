// MAP serve para alterar o Array.

//dobrando os números do Array com map:
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
var multiplica = function (item) {
    return item * 2;
}
*/
var dobrado = numeros.map(function (item) {
    return item * 2;
});

console.log(dobrado);

//transformando graus fahrenheit em ºC:
var fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];

var celcius = fahrenheit.map(function (item) {
    return Math.round((item - 32)*5/9);
})

console.log(celcius);

//Normalizar os nomes digitados errados:
var convidados = [
    {nome: 'felipe', vip: false}, 
    {nome: 'danIEl', vip: true}, 
    {nome: 'Joao', vip: true}
];

  //para fazer um map de um objeto com mais de um parâmetro, deve-se copiar os outros parametros também, não só o que vai ser modificado:
var convidadosNormalizado = convidados.map(function (item) {
    return {nome: item.nome.toUpperCase(), vip: item.vip};
});

console.log(convidadosNormalizado);

 /*porém, se caso adicionarem uma nova propriedade do objeto
  *como idade nesse exemplo, essa forma não vai pegar. Então  
  *a melhor forma de usar o Map com um Objeto, é usando o 
  *"Object.assign" que copia todo o objeto e sobscreve o 
  *selecionado. obs.: primeiro vem o destino, segundo a
  *origem; onde o destino é o objeto copiado e a origem é o 
  *parâmetro alterado:
  */

var convidados = [
    {nome: 'felipe', vip: false, idade: 21}, 
    {nome: 'danIEl', vip: true, idade: 19}, 
    {nome: 'Joao', vip: true, idade: 60}
]; 

var convidadosNormalizado = convidados.map(function (item) {
    return Object.assign(item, {nome: item.nome.toUpperCase()});
});

console.log(convidadosNormalizado);