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
 