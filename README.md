# NestJS Animals API 🐾

A simple REST API built with **NestJS**, **MySQL**, **TypeORM**, and **JWT authentication**.

## Features

- User authentication (register & login)
- JWT-protected routes
- CRUD operations for Animals
- MySQL database
- Clean service / controller architecture

---

## Tech Stack

- NestJS
- TypeScript
- MySQL
- TypeORM
- Passport JWT
- bcrypt

---

## Project Structure

```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── jwt.strategy.ts
│   └── user.entity.ts
│
├── animals/
│   ├── animals.controller.ts
│   ├── animals.service.ts
│   ├── animals.module.ts
│   └── animal.entity.ts
│
├── app.module.ts
└── main.ts
```

---

## Database Setup

Create the database manually:

```sql
CREATE DATABASE nest_animals;
```

Update your MySQL credentials in `app.module.ts` if needed.

---

## Authentication

### Register
```
POST /auth/register
```

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

### Login
```
POST /auth/login
```

Returns:
```json
{
  "access_token": "JWT_TOKEN_HERE"
}
```

Use this token for protected routes:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Animals API (Protected)

### Create Animal
```
POST /animals
```

```json
{
  "name": "Leo",
  "species": "Lion",
  "age": 5
}
```

### Get All Animals
```
GET /animals
```

### Get One Animal
```
GET /animals/:id
```

### Update Animal
```
PUT /animals/:id
```

```json
{
  "age": 6
}
```

### Delete Animal
```
DELETE /animals/:id
```

---

## Installation & Project Setup

### 1. Install NestJS CLI
```bash
npm install -g @nestjs/cli
```

### 2. Create Project
```bash
nest new nest_api_sample
cd nest_api_sample
```

### 3. Install Dependencies
```bash
npm install @nestjs/typeorm typeorm mysql2
npm install @nestjs/jwt passport passport-jwt @nestjs/passport bcrypt
npm install class-validator class-transformer
```

### 4. Run the Server
```bash
npm run start:dev
```

Server runs at:
```
http://localhost:3000
```

---

## Notes

- `synchronize: true` is enabled for development only
- Do not use `synchronize` in production
- Use migrations for production databases