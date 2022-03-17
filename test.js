const Container = require("./main");
const productos = require("./productos");

const cont = new Container("./productos.txt");

const main = async () => {
  console.log(await cont.getAll());
};

main();
