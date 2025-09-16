const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // apna MySQL user
  password: "minhal890@", // apna MySQL password
  database: "testdb",    // apna database
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected!");
});

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Register route
app.post("/register", (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  db.query(
    "INSERT INTO register (name, email, password, phone) VALUES (?, ?, ?, ?)",
    [name, email, password, phone],
    (err, result) => {
      if (err) {
        console.error("DB Error:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "User registered successfully!" });
    }
  );
});


app.post("/feedback", (req, res) => {
  const { name, email, usertypes, eventattend, ratting, comment } = req.body;

  if (!name || !email || !usertypes || !eventattend || ratting == null || !comment) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const sql = "INSERT INTO feedback (name, email, usertypes, eventattend, ratting, comment) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, email, usertypes, eventattend, ratting, comment], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: " Feedback submitted successfully!" });
  });
});

       
app.post("/contact", (req, res) => {
    const {name , email, subject, message} = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    const sql = "INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, subject, message], (err, result) => {
      if (err) {
        console.error("DB Error:", err);
        return res.status(500).json({ message: "Database error" });
        }   
        res.json({ message: " Message sent successfully!" });
        });
    });



// ✅ Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
