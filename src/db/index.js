import knex from "knex";
import config from "../../knexfile";

class Database {
  constructor() {
    if (!Database.instance) {
      Database.instance = this.init();
    }
  }
  init() {
    return {
      db: knex(config.development)
    };
  }
  getInstance() {
    return Database.instance;
  }
}

const { db } = new Database().getInstance();
export default db;
