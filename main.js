const { error } = require("console");
const fs = require("fs");

class Container {
  constructor(path) {
    this.path = path;
  }

  async saveAll(data) {
    try {
      const content = await fs.promises.writeFile(this.path, data);
      const newContent = await this.getAll();
      return newContent;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }

  async getAll() {
    try {
      const content = await fs.promises.readFile(this.path, "utf-8");
      const parsedContent = await JSON.parse(content);
      return parsedContent;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }

  async save(art, price, timg) {
    try {
      const elements = await this.getAll();
      const ids = await elements.map((user) => user.id);
      const sortedIds = await ids.sort((a, b) => a - b);
      let lastId = sortedIds[sortedIds.length - 1];
      let newId = lastId + 1;
      let newObj = {
        title: art,
        price: price,
        thumbnail: timg,
        id: newId,
      };
      let newData = [...elements, newObj];
      const writeNewElements = await this.saveAll(JSON.stringify(newData));
      const newContent = await this.getAll();
      return newContent;
    } catch (err) {
      /* handle error */
      console.log(err);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.path, "[]");
      console.log("Borrado exitosamente");
      const newContent = await this.getAll();
      return newContent;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }
  async deleteById(id) {
    try {
      const contents = await this.getAll();
      const elements = await contents.filter((e) => e.id !== id);
      const writeNewElements = await this.saveAll(JSON.stringify(elements));
      const newContent = await this.getAll();
      return newContent;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      const elements = await this.getAll();
      const element = await elements.filter((e) => e.id === id);
      return element;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }
}

module.exports = Container;
