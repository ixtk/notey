import { response } from "express";

fetch("http://localhost:3000/notes/69c0b76341ff83f5f10a5e75", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "ka-GE,ka;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": '"Chromium";v="146", "Not-A.Brand";v="24", "Brave";v="146"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1",
    cookie:
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWMzNTQwNDcwNzhjYTczMGU3Yzk0NmMiLCJpYXQiOjE3NzQ0MDg3MjgsImV4cCI6MTc3NTAxMzUyOH0.MrNZlxq9jrQiGp7VwDBU022OUU-_jkKlh5bUs4rb0Fw",
    Referer: "http://localhost:5173/"
  },
  body: '{"content":"abcd"}',
  method: "PUT"
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))