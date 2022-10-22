const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Hello World Our News API is working");
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((news) => news._id === id);
  res.send(selectedNews);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } 
  else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Dragon News Server is running on port ${port}`);
});
