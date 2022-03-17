const { error } = require("console");
const fs = require("fs");

class Container {
  constructor(path) {
    this.path = path;
  }

  async getContentById(id) {
    try {
      const content = await this.getAll();
      const parsedContent = await JSON.parse(content);
      return parsedContent;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }

  async save(data) {
    try {
      await fs.promises.writeFile(this.path, data);
      console.log("Escritura exitosa");
    } catch (err) {
      /* handle error */
      console.log(err);
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
  async deteleById(id) {
    try {
      const elements = await this.getContentById(id);
      const element = await elements.filter((e) => e.id !== id);
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }

  async getAll() {
    try {
      const content = await fs.promises.readFile(this.path, "utf-8");
      return content;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }
  async getById(id) {
    try {
      const elements = await this.getContentById(id);
      const element = await elements.filter((e) => e.id === id);
      return element;
    } catch (err) {
      /* handle error */
      throw new Error(err);
    }
  }
}

module.exports = Container;
