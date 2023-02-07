var currentMoney = 10
var laptopPrice = 100

// if(currentMoney<laptopPrice) {
//     console.log(`You too broke for a new Mac , kid`);
// }

function brokeMessage(name){
if(currentMoney<laptopPrice) {
    console.log(`You too broke for a new ${laptopPrice} laptop boss`);
}
}

console.log(brokeMessage("omar"));

var currentMoney = 500
var laptopPrice = 100

function hopeMessage(name){
    if (currentMoney < laptopPrice) {
        console.log(`You're too broke`);
    } else { `Might be hope after all`
    }
}

console.log(hopeMessage('omar'))