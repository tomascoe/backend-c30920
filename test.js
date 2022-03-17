const Container = require("./main");
const productos = require("./productos");

const cont = new Container("./productos.txt");

//cont.write(JSON.stringify(productos));

const main = async () => {
  console.log(await cont.getById(2));
};

main();
