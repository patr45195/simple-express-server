// to start project: npm run start

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} port.`);
});

app.get("/user/1", (req, res) => {
  const user = { id: 1, name: "John", age: 30, city: 2, country: 2 };
  res.json(user);
});

app.get("/cities", (req, res) => {
  const cities = [
    { id: 1, city: "London" },
    { id: 2, city: "Moscow" },
    { id: 3, city: "Gamburg" },
  ];
  res.json(cities);
});

app.get("/countries", (req, res) => {
  const countries = [
    { id: 1, country: "England" },
    { id: 2, country: "Russian" },
    { id: 3, country: "Germany" },
  ];
  res.json(countries);
});
