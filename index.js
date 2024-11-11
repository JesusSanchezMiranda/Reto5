const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
app.listen(PORT, () =>{
    console.log("Server prendido");
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get("/proyectos", (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'proyectos.html'))
})

app.get("/habilidades", (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'habilidades.html'))
})

app.get("/contacto", (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacto.html'))
})
