import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(express.json());

const USERS = [
  { id: 1, username: "admin", password: "admin123", role: "ADMIN" },
  { id: 2, username: "user",  password: "user123",  role: "USER"  }
];

// Zadanie 1: funkcja signToken
function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

// Zadanie 2: middleware requireAuth
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Brak tokenu" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Niepoprawny token" });
  }
}

// Zadanie 3: logowanie
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Niepoprawne dane logowania" });
  }

  const token = signToken({ id: user.id, username: user.username, role: user.role });
  res.status(200).json({ token });
});

// Zadanie 4: trasa chroniona
app.get("/profile", requireAuth, (req, res) => {
  res.status(200).json({
    message: "Dane użytkownika",
    user: req.user
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
});