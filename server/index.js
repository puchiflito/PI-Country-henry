const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const loadDb = require("./src/controllers/loadDb.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      await loadDb();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
