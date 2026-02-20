// ცვლადები

let post = "How to cook"
let fruits = ["apple", "orange", "melon"]

// ობიექტი
let comment = {
  text: "Very good book",
  author: "John"
}

// console.log("Hi", fruits)
// console.log(comment.author)

// request.body.content

const request = {
  body: {
    content: "This is a new note"
  }
}

// console.log(request.body.content)

let age = 24

// if (age >= 18) {
//   console.log("You can log in")
// } else {
//   console.log("Not allowed")
// }

// isRaining (false, true)
// "It is raining"

let isRaining = false

// if (isRaining === true) {
//   console.log("It is raining")
// } else {
//   console.log("It is sunny")
// }

function sayHello(name) {
  console.log("Hello", name)
}

// sayHello("George")
// sayHello("Sophia")
// sayHello("Michael")

function add(a, b) {
  // a = 6, b = 9
  console.log(a + b)
}

// add(6, 9)

function getTotalPrice(quantity, price) {
  // quantity = 3, price = 5
  console.log(quantity * price)
}

// getTotalPrice(3, 5)

function summary(name, age) {
  console.log("My name is", name, "age is", age)
}
