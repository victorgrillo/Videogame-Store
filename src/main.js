const getProductsForClient = require("./products");

async function main() {
    console.log("Loja de Videogames");

    console.log("Olhe nossos itens a venda!")
    console.log(getProductsForClient());

}

main();