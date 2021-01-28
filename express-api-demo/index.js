const http = require("http");
const express = require("express");
const morgan = require("morgan");

const logger = morgan('dev');

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(logger);
let number = 0;

app.get('/api', (req, res)=>{
    res.json({
        status: "This is my Home page.",
    })
});

app.get('/api/blog', (req, res)=>{
    res.json({
        status: "This is my Blog page",
    })
});

app.get('/api/about', (req, res)=>{
    res.json({
        status: "This is the About me page",
    })
});

app.get('/api/counter', (req, res)=>{
    res.json({
        value: number,
    })
});
app.post('/api/counter', (req, res)=>{
    number++;
    res.json({
        status: 'incremented',
        value: number 
    })
});

app.put('/api/counter', (req,res)=>{
    number--;
    res.json({
        status: 'decremented',
        value: number 
    })
})

app.delete('/api/counter', (req,res)=>{
    number = 0;
    res.json({
        status: 'back to 0',
        value: number 
    })
})

server.listen(3500, ()=>{
    console.log("Serving on port 3500")
})