const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/fruits", (req, res) => {
  const { name, category } = req.body;
  console.log(name);
  console.log(category);
  res.send("Fruit submitted sucessfully!");
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000!`);
});
