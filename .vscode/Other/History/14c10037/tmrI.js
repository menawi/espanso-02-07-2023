let currentMoney = 10
let laptopPrice = 100

// if(currentMoney<laptopPrice) {
//     console.log(`You too broke for a new Mac , kid`);
// }

function brokeMessage(name){
if(currentMoney<laptopPrice) {
    console.log(`You too broke for a new ${laptopPrice} laptop boss`);
}
}

console.log(brokeMessage("omar"));

function hopeMessage(name){
    if (currentMoney < laptopPrice) {
        console.log(`You're too broke`);
    } else { `Might be hope after all`
    }
}

console.log(hopeMessage('omar'))