class User {
     constructor (name, age) {
          this.name = name
          this.age = age
     }
}

function printName(user) {
     console.log(`User's name is ${user.age}`)
}

function printAge(user){
     console.log(`User's age is ${user.age} years old`)
}

export default User

export {printName, printAge}

// Notice how we put the export below the rest of the script, which can be clunky and hard to follow. Alternative below

export default class User {
     constructor (name, age) {
          this.name = name
          this.age = age
     }
}

export function printName(user) {
     console.log(`User's name is ${user.age}`)
}

function printAge(user){
     console.log(`User's age is ${user.age} years old`)
}