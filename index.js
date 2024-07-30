const { criar, listar, atualizar, remover } = require("./produtos");
const prompt = require("prompt-sync")()
let produto 
while (produto!=0) {
    console.log(`
    >>>>Produtos<<<<
    1. Adicionar um produto
    2. Listar os produtos
    3. Atualizar um produto
    4. Remover um produto
    0. Sair
    `);
    produto = +prompt ("Escolha uma opção: ");
    switch (produto) {
        case 1:
            console.log(criar());
            break;
            case 2:
                console.log(listar());
                break;
                    case 3:
                        console.log(atualizar());
                        break;
                            case 4:
                                console.log(remover());
                                break;
                                    case 0:
                                        console.log("Encerrando..");
                                        break;
        default:
            console.log("Opção inválida.");
            break;
    }
}