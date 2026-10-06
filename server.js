import http from "http";
import {products, getProductsForClient} from "./src/products.js";
import { callbackify } from "util";

const server = http.createServer((req, res) => {

    if(req.method === "GET" && req.url === "/products") {
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(getProductsForClient()));
        return;
    }

    if(req.method === "GET" && req.url.startsWith("/products/")) {

        const partes = req.url.split("/")
        const id = Number(partes[2]);
        const product = products.find((product) => product.id === id);

        if (!product){
            res.statusCode = 404;
            res.end("Product not found!");
            return;
        }

        
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(product));
        return;

        

    }

    if(req.method === "POST" && req.url === "/products") {
        let body = ""
        
        req.on("data", (chunk) => { 
            body += chunk
        });
        req.on("end", () => {
            
            const novoProduto = JSON.parse(body);
            const ids = products.map(product => product.id);
            let maiorId = Math.max(...ids);
            const novoId = maiorId + 1;
            
            

        });

    return;
    
    }




    res.statusCode = 404;
    res.end("Route not found!");

    
});



    

    

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


