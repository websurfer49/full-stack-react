const createServer = require("./server");
const supertest = require("supertest");
const { Pool } = require("pg");

let pool = new Pool({
  database: "test",
});

const server = createServer(pool);

afterAll(() => {
  pool.end();
});

test.skip("GET /api/tasks", async () => {
  const response = await supertest(server).get("/api/tasks").expect(200);
  expect(response.body).toEqual([]);
});

test.skip("DELETE /api/tasks", async () => {
  await supertest(server).delete("/api/tasks/3").expect(200);
});
