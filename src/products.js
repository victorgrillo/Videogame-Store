const products = [{
    id: 1,
    name: "Playstation 5",
    category: "Console",
    price: 3999.90,
    stock: 10
},
{
    id: 2,
    name: "Xbox Series X",
    category: "Console",
    price: 3599.90,
    stock: 5
},
{
    id: 3,
    name: "Nintendo Switch 2",
    category: "Console",
    price: 4299.00,
    stock: 2
},
{
    id: 4,
    name: "Headphone BT",
    category: "Accessory",
    price: 259.90,
    stock: 3
},
{
    id: 5,
    name: "Controller",
    category: "Accessory",
    price: 299.99,
    stock: 7
}]

function getProductsForClient() {
    return products.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price, 
        stock: product.stock

    }))
}

export {products, getProductsForClient};