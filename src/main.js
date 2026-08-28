import {getProductsForClient} from "./products.js";
import * as readline from "node:readline/promises";
import {finalPrice, addToCart} from "./cart.js";

async function main() {
    console.log("Loja de Videogames");


    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout });
    let answer = await rl.question("Você gostaria de comprar algum item? Responda sim para dar uma olhada");

        if (answer === "sim") {
            console.log("Olhe nossos itens a venda!");
            console.log(getProductsForClient());

            let  productId = Number (await rl.question("Qual item você gostaria de comprar? (Insira o ID)"));

            let quantityProduct = Number (await rl.question("Quantos itens você gostaria de comprar?"));

            addToCart(productId, quantityProduct);
            
            let othersProducts = await rl.question("Gostaria de comprar mais algum item?");
            
            while (othersProducts === "sim") {

                let productId = Number(await rl.question("Insira o ID do outro produto:"));
                
                let quantitySecProducts = Number(await rl.question("Quantos itens você gostaria de comprar?"));
    
            
                 addToCart(productId, quantitySecProducts);
                
                 othersProducts = await rl.question("Gostaria de comprar mais algum item?");
            }
            
                
        
             
            let finishBuying = await rl.question("Podemos finalizar a compra? ");              
            

            if (finishBuying === "sim")
                console.log("Sua compra final é de: R$" +finalPrice());

                else {
                console.log("Compra não finalizada.");
                }
                rl.close();
            }


                
            
            
            
                
                
        
        else {
            console.log("Obrigado por visitar nossa loja! Até mais!");
            rl.close();
            return;

        };



            


        

        

    



}

main();