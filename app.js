const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));




app.get("/", (req,res)=>{
    res.sendFile(path.resolve("./views/home.html"))
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });