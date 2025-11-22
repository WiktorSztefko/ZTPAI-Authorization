# Lab – JWT

## Zadania
1. Zaimplementuj funkcję `signToken`, która generuje token JWT.
2. Zaimplementuj middleware `requireAuth`, który weryfikuje poprawność tokena.
3. Uzupełnij endpoint `POST /login`, aby przy poprawnych danych logowania zwracał token.
4. Uzupełnij endpoint `GET /profile`, aby zwracał dane chronione tylko po poprawnym tokenie.

## Uruchomienie
- skopiuj `.env.example` do `.env` i ustaw własny sekret
- `npm install`
- `npm run dev`

Serwer działa na `http://localhost:3000`.
