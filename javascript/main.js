const products = [
    {
        name: "Apple",
        price: 100,
        size: "medium",
    },
    {
        name: "Apple",
        price: 100,
        size: "medium",
    },
    {
        name: "Apple",
        price: 100,
        size: "medium",
    },
    {
        name: "Apple",
        price: 100,
        size: "medium",
    },
];

const updatedProduct = products.map(product => ({
    ...product,
    company: "frontendzone",
    city: "Noida",
}));

const updatedProduct1 = products.map(product => {
    delete product.name;
    return product;
});

console.log(updatedProduct1);
