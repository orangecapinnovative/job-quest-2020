const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "joke_system",
});

app.post("/", (req, res) => {
  const joke = req.body.Joke;
  db.query("insert into joke(joke) values(?)", [joke], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/DELETE/:id", (req, res) => {
  const id = req.body.id;
  db.query("delete from joke where id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/:id/like", (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  db.query(
    "update joke set joke_like=? where id=?",
    [status, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.post("/:id/dislike", (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  db.query(
    "update joke set joke_unlike=? where id=?",
    [status, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/", (req, res) => {
  db.query("select * from joke", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/:id", (req, res) => {
  db.query("select * from joke ORDER BY id DESC LIMIT 0,1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen("3001", () => {
  console.log("Server is running port 3001");
});
