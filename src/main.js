import getProductsForClient from "./products.js";
import * as readline from "node:readline/promises";

async function main() {
    console.log("Loja de Videogames");


    const rl = readline.createInterface({ input, output });
    const answer = await rl.question("Você gostaria de comprar algum item? Responda sim para dar uma olhada");

        if (answer === "sim") {
            console.log("Olhe nossos itens a venda!");
            console.log(getProductsForClient());

            const  nameProduct = await rl.question("Qual item você gostaria de comprar?");

            const quantityProduct = await rl.question("Quantos itens você gostaria de comprar?");

            const othersProducts = await rl.question("Gostaria de comprar mais algum item?")
                if (othersProducts === "sim") {
                    const nameSecProducts = await rl.question("Insira o nome do outro produto:")

                    const quantitySecProducts = await rl.question("Quantos itens você gostaria de comprar?")
                }
                else { 
                    const finishBuying = await rl.question("Podemos finalizar a compra? ")               
                }
            
            
                
                
        
        } else {
            console.log("Obrigado por visitar nossa loja! Até mais!");
            rl.close();
            return;

        }



            


        

        

    



    




}

main();