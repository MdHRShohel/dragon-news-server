const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('Hello World Our News API is working');
});

app.listen(port,()=>{
    console.log(`Dragon News Server is running on port ${port}`);
});