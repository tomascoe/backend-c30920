const { error } = require("console");
const fs = require("fs");

class Container {
  constructor(path) {
    this.path = path;
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

  async save(data) {
    try {
      const content = await fs.promises.writeFile(this.path, data);
      const newContent = await this.getAll();
      return newContent;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.path, "[]");
      console.log("Borrado exitosamente");
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }
  async deleteById(id) {
    try {
      const contents = await this.getAll();
      const elements = await contents.filter((e) => e.id !== id);
      const writeNewElements = await this.save(JSON.stringify(elements));
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
