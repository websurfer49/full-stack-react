import express from "express";
import cors from "cors";
import pg from "pg";

const pool = new pg.Pool({
    user: "lucas", password: '123',
    database: "mytest",
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/joblistings", (req, res) => {
    pool.query("SELECT * FROM joblistings").then((result) => {
        res.send(result.rows);
    });
});

app.listen(3000);


