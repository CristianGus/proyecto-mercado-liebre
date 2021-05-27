const express = require('express');
const app = express();
const path = require('path')
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))


app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () =>
    console.log('Servidor corriendo en el puerto 3000'+app.get("port")));

app.use(express.static(path.resolve(__dirname, "./public")))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html' )));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views/login.html' )));git 
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html' )));
