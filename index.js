const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');



app.get('/',(req,res)=>{
    res.send('Hello World Our News API is working');
});

app.get('/news-categories',(req,res)=>{
    res.send(categories);
});

app.listen(port,()=>{
    console.log(`Dragon News Server is running on port ${port}`);
});