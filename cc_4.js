let products = [
    {sku:"001", pName: "BT Earbuds", category: "electronics", price: 49.99, stock: 42},
    {sku:"002", pName: "Phone Charger", category: "electronics", price: 24.18, stock: 65},
    {sku:"003", pName: "Smart Bulb", category: "electronics", price: 19.25, stock: 58},
    {sku:"004", pName: "Green T-Shirt", category: "apparel", price: 14.35, stock: 123},
    {sku:"005", pName: "Black Shorts", category: "apparel", price: 20.12, stock: 96},
    {sku:"006", pName: "Rice Bag", category: "groceries", price: 15.75, stock: 236},
    {sku:"007", pName: "Strawberry Jam", category: "groceries", price: 5.23, stock: 155},
    {sku:"008", pName: "Laundry Detergent", category: "household", price: 16.25, stock: 365},
    {sku:"009", pName: "Toilet Paper", category: "household", price: 12.36, stock: 165},
    {sku:"010", pName: "Soccer ball", category: "sport", price: 35.99, stock: 91}
];

//discount rate by category
for (const product of products) {
    let disRate = 0;
    switch (product.category) {
        case "electronics":
            disRate = 0.20; //20%
            break;

        case "apparel":
            disRate = 0.15; //15%
            break;
            
        case "groceries":
        case "household":
            disRate = 0.10; //10%
            break;

        default:
            disRate = 0; //0%
    }
        let disPrice = product.price * (1-disRate);
        let discount = disRate * 100;
        console.log(`Price for ${product.pName} is $${disPrice.toFixed(2)} after a discount of ${discount}% off , original price was $${product.price.toFixed(2)}`)
        product.disPrice = disPrice.toFixed(2);
        product.disRate = disRate.toFixed(2);
    };


    //orders and customer types (loy) loyal, (stu) student, (vet) veteran, (reg) regular
    let custOrders = [
        {orderId:"001", customerType:"loy", cart: [{sku:"001", qty: 20}, {sku:"002", qty: 50}]},
        {orderId:"002", customerType:"stu", cart: [{sku:"003", qty: 36}, {sku:"004", qty: 15}]},
        {orderId:"003", customerType:"vet", cart: [{sku:"005", qty: 23}, {sku:"006", qty: 22}]},
        {orderId:"004", customerType:"stu", cart: [{sku:"007", qty: 12}, {sku:"008", qty: 32}]},
        {orderId:"005", customerType:"reg", cart: [{sku:"009", qty: 6}, {sku:"010", qty: 71}]}  
    ];

    //dicount rate for customer types
    for (const order of custOrders) {
       if (order.customerType === "loy") {
        order.disRateTotal = 0.05; //5%
    } else if (order.customerType === "stu"){
        order.disRateTotal = 0.10; //10%
    } else if (order.customerType === "vet"){
        order.disRateTotal = 0.15; //15&
    } else {
        order.disRateTotal = 0; //0%
    }
    };

    //variables for while loop
    let i = 0; //order index
    let n = 0; // customer number
    let p = 0; // cart position
    let subtotal = 0;
    
    //while loop
    while (n <= 3 && i < custOrders.length){
        let order = custOrders[i];
        
    while (p < order.cart.length){
        let item = order.cart[p];
        let product = products[(i*2)+p];

        subtotal += product.disPrice*item.qty;
        product.stock -= item.qty;

        p++;
    }
        let total = subtotal *(1 - order.disRateTotal);
        console.log(`Order ${order.orderId} processed: \nSubtotal: $${subtotal.toFixed(2)}. \nTotal: $${total.toFixed(2)}.`);
        n++;
        i++;
    };

    //For in loop for all products
   // products.forEach((product) => {
   //     for (const key in product) {
   //         console.log(`${key}: ${product[key]}`) 
   //     }     
  //  });

  // For in loop for a single product
  for (const key in products[2]) {
    console.log(`${key}: ${products[2][key]}`)
  };