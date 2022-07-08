/* Filter + map. Uma função que fltra os 
 *números pares de um array e dobra o 
 *valor deles:
 */

 var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

 var pares = function (item) {
    return !(item % 2);
 }

 var dobrados = function (item) {
    return item * 2;
 }

 var numerosDobrados = numeros.filter(pares).map(dobrados);
 console.log(numerosDobrados);

 /* usando o reduce para agrupar produtos de acordo
  *com suas categorias:
  */

var produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tenis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
  ];

  function groupBy(array, prop) {
    var value = array.reduce(function (total, item) {
        var key = item[prop]; //item.categoria

        total[key] = (total[key] || []).concat(item);

        return total;
    }, {} );

     return value;
  }

  var agrupados = groupBy(produtos, 'categoria');
  console.log(agrupados);

  /* transformando o "groupBy" numa função própria do Array 
   *do JavaScript através do 'prototype' do objeto adão, para 
   *chamar o 'groupBy' só com um ponto (.), por exemplo:
   * (.groupBy):
   */


var produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 125, nome: 'Shorts', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tenis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
  ];

  Array.prototype.groupBy = function(prop) {
    var value = this.reduce(function (total, item) {
        var key = item[prop]; //item.categoria

        total[key] = (total[key] || []).concat(item);

        return total;
    }, {} );

     return value;
  }

 var produtosFiltrados = produtos.filter(function (item) {
    return item.cor == 'preto';
 }).filter(function (item) {
    return item.tamanho == 'G'
 }).groupBy('categoria');

 console.log(produtosFiltrados);