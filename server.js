import http from "http";
import {products, getProductsForClient} from "./src/products.js";

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
            res.setHeader("Content-Type", "application/json; charset=utf-8");
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
            
            let novoProduto = JSON.parse(body);
            let ids = products.map(product => product.id);
            let maiorId = Math.max(...ids);
            let novoId = maiorId + 1;
            novoProduto.id = novoId;
            products.push(novoProduto);

        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify({
            message: "New product added to the database.",
            product: novoProduto
        }));
    });
        return;
       
    }

    if(req.method === "PUT" && req.url.startsWith("/products/")) {

        const partes = req.url.split("/")
        const id = Number(partes[2]);
        const product = products.find((product) => product.id === id);
            
        if (!product){
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end("Product not found!");
        return;
        }

        let body = "";
        req.on("data", (chunk) => { 
            body += chunk
        });
        req.on("end", () => {


            try {
            const newData = JSON.parse(body);
            const updatedData = {
                name: newData.name,
                price: newData.price,
                stock: newData.stock
            };
            

            Object.assign(product, updatedData);

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify({
                "message": "Content updated!",
                product
            }));



            } catch (error) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.end(JSON.stringify({
                    "error": "Invalid JSON",
                    "message": "The request body could not be parsed"
                }));
                console.log("Invalid JSON");
            }

        });
        return;
    }
    
    if(req.method === "PATCH" && req.url.startsWith("/products/")) {

        const partes = req.url.split("/")
        const id = Number(partes[2]);
        const product = products.find((product) => product.id === id);
            
        if (!product){
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end("Product not found!");
        return;
        }

        let body = "";
        req.on("data", (chunk) => { 
            body += chunk
        });
        req.on("end", () => {

            const newData = JSON.parse(body);
            const allowedFields = ["name", "price", "stock"];
            const updatedData = Object.fromEntries(
                Object.entries(newData).filter(([key]) => {
                    return allowedFields.includes(key);
                    
                
            })
        );
        Object.assign(product, updatedData);
            
        
        }

    )
}   
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end("Route not found!");
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});





