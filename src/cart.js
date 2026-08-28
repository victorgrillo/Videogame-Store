import {products} from "./products.js";

const cart = [];

function addToCart (productId, quantity){
    const product = products.find(product => product.id === productId);

    if (!product){
        console.log("Produto não encontrado!");
        return;
    }

    if (quantity > product.stock) {
        console.log("Quantidade indisponível!");
        return;
    }

    
    
    cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
    });
}

function finalPrice() {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

export {addToCart, finalPrice};