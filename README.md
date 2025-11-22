# Lab – JWT

## Zadania
1. Zaimplementuj funkcję `signToken`, która generuje token JWT.
2. Zaimplementuj middleware `requireAuth`, który weryfikuje poprawność tokena.
3. Uzupełnij endpoint `POST /login`, aby przy poprawnych danych logowania zwracał token.
4. Uzupełnij endpoint `GET /profile`, aby zwracał dane chronione tylko po poprawnym tokenie.

## Uruchomienie
- w pliku `.env` ustaw własny sekret
- `npm install`
- `npm run dev`

Serwer działa na `http://localhost:3000`.

## Opis
Prosta aplikacja pokazująca działanie logowania, generowania tokenu JWT oraz zabezpieczonych tras.

## Funkcjonalności
- Endpoint logowania (POST /login)
- Generowanie tokenu JWT
- Middleware weryfikujący token (requireAuth)
- Chroniona trasa (GET /profile)
- Role użytkowników zawarte w tokenie
- Czas wygaśnięcia tokenu ustawiany w .env

## Informacje
Aplikacja implementuje wyłącznie backend i nie posiada frontendu. Weryfikację działania można wykonywać za pomocą poleceń curl, programów typu Postman, Insomnia, lub innych narzędzi do testowania API.