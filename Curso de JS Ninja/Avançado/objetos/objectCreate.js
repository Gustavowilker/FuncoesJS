/* Exemplo de como criar um objeto clonando um 
 *objeto já existente:
 */

 var pessoa1 = {
    nome: 'Felipe',
    idade: 37
 }

 var pessoa2 = {
    nome: 'Felipe',
    idade: 37
 }

 pessoa1 != pessoa2;
 // true

 pessoa3 = pessoa2;
 // referência

 var pessoa3 = Object.create(pessoa2);