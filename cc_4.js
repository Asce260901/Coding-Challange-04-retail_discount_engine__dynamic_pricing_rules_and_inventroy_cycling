let products = [
    {pName: "BT Earbuds", category: "electronics", price: 49.99, stock: 42},
    {pName: "Phone Charger", category: "electronics", price: 24.18, stock: 65},
    {pName: "Smart Bulb", category: "electronics", price: 19.25, stock: 58},
    {pName: "Green T-Shirt", category: "apparel", price: 14.35, stock: 123},
    {pName: "Black Shorts", category: "apparel", price: 20.12, stock: 96},
    {pName: "Rice Bag", category: "groceries", price: 15.75, stock: 236},
    {pName: "Strawberry Jam", category: "groceries", price: 5.23, stock: 155},
    {pName: "Laundry Detergent", category: "household", price: 16.25, stock: 365},
    {pName: "Toilet Paper", category: "household", price: 12.36, stock: 165},
    {pName: "Soccer ball", category: "sport", price: 35.99, stock: 91}
];

for (const product of products) {
    switch (product.category) {
        case "electronics":
            disRate = 0.20
            disPrice = products.price * (1-disRate);
            break;

        case "apparel":
            disRate = 0.15
            disPrice = products.price * (1-0.15);
            break;
            
        case "groceries || household": 
            disPrice = product.price * (1-0.15);
            break;

        default:
            discPrice = product.price;
        
        

    }
};