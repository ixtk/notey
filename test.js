fetch("http://localhost:3000/note", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "ka-GE,ka;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    cookie:
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTlmYmNiOWVmZTA3ZDY1MzUzNzJkNGMiLCJpYXQiOjE3NzM4MDQyNzMsImV4cCI6MTc3NDQwOTA3M30.eDhoOM7x65_TnesOfKH-Be7gCMqFNNBBqeaBDpOIyz8",
    Referer: "http://localhost:5173/"
  },
  body: '{"textContent":"123"}',
  method: "POST"
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error))
