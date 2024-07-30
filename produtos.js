const prompt = require("prompt-sync")()
module.exports={
    criar,
    atualizar,
    remover,
    listar
}
const produtos = []
function modelo() {
    const nome = prompt("Nome do produto: ");
    const valor = prompt("Valor do produto: ");
    if (nome != "" && valor != "") {
        return {
            nome,
            valor
        }
    }else {
        console.log("Dados inválidos. ");
        return undefined
    }
}
function criar() {
    let produto = modelo()
    if (produto!= undefined) {
        produtos.push(produto)
        console.log("Cadastrado com sucesso.");
    }else {
        console.log("Erro no cadastro");
    }

}
function atualizar() {
    listar()
    const prompt = require("prompt-sync")()
    let indice = +prompt ("Qual produto deseja atualizar? ")-1;
    let produto = modelo()
    if (produto!= undefined) {
        produtos[indice] = produto;
        console.log("Produto atualizado com sucesso.");
    }else{
        console.log("Não foi possivel atualizar esse produto");
    }
    
}
function remover() {
    const prompt = require("prompt-sync")()
    listar()
    let indice = +prompt("Qual produto deseja remover? ")-1;
    produtos.splice(indice,1);
    console.log("Produto removido.");
    

}
function listar() {
    if (produtos.length!= 0) {
        produtos.forEach((prod, indice) => {
            console.log(`
            ${indice +1}.
            Produto: ${prod.nome}
            Preço: ${prod.valor}
            `);
        });
    }
}