const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
]

for (let n of nums) {
  fetch("http://localhost:3000/note", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: n })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
}
