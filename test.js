fetch("http://localhost:3000/note", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "ka-GE,ka;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    Referer: "http://localhost:5173/"
  },
  body: '{"content":"axali"}',
  method: "POST"
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error))
