//Exercise 3b
product1 = { 'name': 'small gumball', 'price': 0.02 };
product2 = { 'name': 'medium gumball', 'price': 0.05 };
product3 = { 'name': 'large gumball', 'price': 0.07 };

//Array of all products
products = [product1, product2, product3];
cart_quantities = [2, 0, 4]; //Corresponds to products array

for (i = 0; i < products.length; i++) {
    console.log(`extended price for product ${products[i].name} is ${products[i].price * cart_quantities[i]} `);

}