// basic function syntax

function nameOfFunc(parameter){
    // func definition / body
}

// Example 1 : Basic

function greeting(){
    console.log("hello what's up");
}

console.log(greeting());

// Example 2 : Adding parameters

function greetName(name){
    const message = (`Hello ${name} !`);
    console.log(message);

}

console.log(greetName("Yumna"));

function greetNames(name1, name2){
    const message = (`Hello ${name1} and ${name2} !`)
    console.log(message);
}

console.log(greetnames("Omar", "Yumna"));