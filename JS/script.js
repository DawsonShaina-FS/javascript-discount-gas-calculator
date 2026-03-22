//initial alert welcoming the user 
alert("Hello and welcome to the Discount Double Check!");

//alert explaining what is going to be done
alert("I'm going to ask you for the price of two items, then calculate your total including any discounts that apply!");

//prompting the user for the cost of the first item
let firstItem = parseFloat(prompt("What is the cost of the first item?", "Ex: 2.50"));

//prompting the user for the cost of the second item
let secondItem = parseFloat(prompt("What is the cost of the second item?", "ex: 4.00"));

let total = firstItem + secondItem;

if (total >= 100) {
    let finalCost = 0.90 * total;
    document.querySelector("#finalTotal").innerHTML = `Your total is ${finalCost.toFixed(2)} which includes a 10% discount`;
    document.querySelector("#finalTotal").className = "firstclass";
}
else if (total >= 50 && total < 100) {
    let finalCost = 0.95 * total;
    document.querySelector("#finalTotal").innerHTML = `Your total is ${finalCost.toFixed(2)} which includes a 5% discount`;
    document.querySelector("#finalTotal").className = "firstclass";
}


