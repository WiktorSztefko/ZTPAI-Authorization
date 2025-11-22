import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const USERS = [
  { id: 1, username: "admin", password: "admin123", role: "ADMIN" },
  { id: 2, username: "user",  password: "user123",  role: "USER"  }
];

// Zadanie 1: funkcja signToken
function signToken(payload) {
  // TODO
}

// Zadanie 2: middleware requireAuth
function requireAuth(req, res, next) {
  // TODO
}

// Zadanie 3: logowanie
app.post("/login", (req, res) => {
  // TODO
});

// Zadanie 4: trasa chroniona
app.get("/profile", requireAuth, (req, res) => {
  // TODO
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
});
