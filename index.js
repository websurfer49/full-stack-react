const createServer = require("./server");
const { Pool } = require("pg");

const pool = new Pool({
  database: "tasktime",
});

const server = createServer(pool);

server.listen(3000, () => {
  console.log("listening on port 3000");
});
