// Assigning amount of customer donuts
let numDonuts = prompt("How many donuts do you want to purchase?");

// Discount code input
let discountCode = prompt("Have a discount code? Enter 'GDD10' for 10% off or 'GGD50' for $5 off.");

// Prices for donuts, tax, shipping, etc.
let pricePerDonut = 1.50;
let taxRate = 0.052;
let shippingCost = 3.99;

// calculate subtotal
let subtotal = numDonuts * pricePerDonut

// apply discount code
let discount = 0.0;
if (discountCode === "10FF") {
    discount = subtotal * 0.1;
} else if (discountCode === "50FF") {
    discount = 5.0;
}

alert(subtotal);