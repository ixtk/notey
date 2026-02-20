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

// function summary(name, age) {
//   console.log("My name is", name, "age is", age)
// }

const summary = (name, age) => {
  console.log("My name is", name, "age is", age)
}

// hobbies, hobby -> "I like" + hobby

// hobbies("reading")

// function hobbies(hobby) {
//   console.log("I like " + hobby)
// }

// arrow function
const hobbies = (hobby) => {
  console.log("I like " + hobby)
}

hobbies("reading")

// user; name, email, address (object) -> city

const User = {
  name: "Tako",
  email: "tako@example.com",
  address: {
    city: "Tbilisi"
  }
}

// console.log(User.address.city)

// filter

const posts = [
  { title: "Post 1", author: "Sarah", likes: 3 },
  { title: "Post 2", author: "Mike", likes: 18 },
  { title: "Post 3", author: "Sarah", likes: 23 }
]

const authors = posts.map(function (p) {
  return p.author.toUpperCase()
})

// console.log(authors)

const postsBySarah = posts.filter(function(p) {
  // console.log('current post is', p)

  if (p.author === "Sarah") {
    return true
  } else {
    return false
  }
})

// const likedPosts = posts.filter(function (p) {
//   return p.likes > 10

//   // if (p.likes > 10) {
//   //   return true
//   // } else {
//   //   return false
//   // }
// })

const likedPosts = posts.filter((p) => {
  return p.likes > 10
})

const numbers = [1, 2, 3, 4]

const doubleNumbers = numbers.map(function(n) {
  return n * 2
})

// console.log(doubleNumbers)

// console.log(likedPosts)
// console.log(postsBySarah)

// filter posts with more than 10 likes
