import http from "http";
import {products, getProductsForClient} from "./src/products.js";

const server = http.createServer((req, res) => {

    if(req.method === "GET" && req.url === "/products") {
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(getProductsForClient()));
        return;
    }

    if(req.method === "GET" && req.url === "/products/1") {

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

    res.statusCode = 404;
    res.end("Route not found!");

    
});


    

    

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


