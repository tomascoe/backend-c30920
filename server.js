const express = require("express");
const app = express();
const Container = require("./main");
const cont = new Container("./productos.txt");
//REQUESTS

app.get("/", (req, res) => res.send("HOME"));

app.get("/productos", (req, res) => {
  cont.getAll().then((resp) => res.send(resp[0]));
});

app.get("/productoRandom", (req, res) => {
  cont
    .getAll()
    .then((resp) => res.send(resp[Math.floor(Math.random() * resp.length)]));
});

//CONFIG
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en el servidor: ${error}`));
