//Função para colocar a letra "e" antes do último nome, para não ficar só virgulas

function ola() {
    var mensagem = "Olá ";

    for(i=0;i < arguments.length - 1;i++) { mensagem += arguments[i];

    if(i < arguments.length - 2){
        mensagem += ", ";
    }
    }

    mensagem += " e " + arguments[arguments.length - 1] + "! Tudo bem!?";

    console.log(mensagem);
}

ola("Gustavo", "Laryssa", "Maria", "João");