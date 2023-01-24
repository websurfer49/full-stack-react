import express from "express";
import cors from "cors";
import pg from "pg";
import postgres from "postgres";

const sql = postgres({
    user: "lucas", password: '123',
    database: "mytest",
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/joblistings", (req, res) => {
    sql`SELECT * FROM joblistings`.then((result) => {
        res.json(result);
    });
});

app.post("/joblistings", (req, res) => {
    const job = req.body
    // const requiredFields = ["title", "salary", "location" ];
    const {title, salary, location} = job;
    sql`INSERT INTO joblistings (title, salary, location) VALUES (${title}, ${salary}, ${location})RETURNING *`.then((result) => {
        res.json(result);
    }
    );
});

app.listen(3000);