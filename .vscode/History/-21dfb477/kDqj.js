let a = (5<6) && (5>6)
console.log(a);

let b = (5<6) || (5>6)
console.log(b);

let c = !((5<6) && (5>6))
console.log(c);

// Logical Operators Exercise

{

    let currentMoney;
    let laptopPrice;
    let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off
    
    if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
        //Condition is true. Code in this block will run.
        console.log("Getting a new laptop!");
    }
    else {
        //Condition is true. Code in this block will run.
        console.log("Can't afford a new laptop, yet!");
    }





}