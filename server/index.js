const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const loadDb = require("./src/controllers/loadDb.js");
const PORT = 3001;

conn
  .sync()
  .then(() => {
    server.listen(PORT, async () => {
      await loadDb();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

// conn
//   .sync({ force: true })
//   .then(async () => {
//     await loadDb();
//     server.listen(PORT, () => {
//       console.log("Servidor en 3001");
//     });
//   })
//   .catch((error) => console.error(error));
