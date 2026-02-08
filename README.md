# NestJS Animals API

A REST API built with **NestJS**, **MySQL**, **TypeORM**, **JWT authentication**, and **caching**.

This project demonstrates a clean, production-style NestJS architecture with environment-based configuration and cached read operations.

---

## Features

- User authentication (register & login)
- JWT-protected routes
- CRUD operations for Animals
- MySQL database with TypeORM
- Environment-based configuration (`.env`)
- In-memory caching for read endpoints
- Cache invalidation on write operations
- Clean controller / service / module separation

---

## Tech Stack

- NestJS
- TypeScript
- MySQL
- TypeORM
- Passport JWT
- bcrypt
- @nestjs/config
- @nestjs/cache-manager

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

## Environment Configuration

Create a `.env` file at the project root:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=nest_animals

# JWT
JWT_SECRET=supersecretchangeit
JWT_EXPIRES_IN=1d
```

⚠️ Do **NOT** commit `.env` to version control.

---

## Database Setup

Create the database manually:

```sql
CREATE DATABASE nest_animals;
```

---

## Authentication

### Register
```
POST /auth/register
```

```json
{
  "email": "test@test.com",
  "password": "test@123"
}
```

Response:
```json
{
  "message": "User registered successfully"
}
```

### Login
```
POST /auth/login
```

Response:
```json
{
  "access_token": "JWT_TOKEN_HERE"
}
```

Use the token for protected routes:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Animals API (JWT Protected)

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

### Get All Animals (Cached)
```
GET /animals
```

### Get One Animal (Cached)
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

## Caching

- Uses NestJS CacheModule (in-memory)
- GET endpoints are cached
- Cache TTL: 60 seconds
- Cache is invalidated automatically on create, update, and delete
- Cache logic lives in services, not controllers

---

## Installation & Project Setup

### 1. Install Node.js
Recommended:
- Node.js v20+

### 2. Install NestJS CLI
```bash
npm install -g @nestjs/cli
```

### 3. Create Project
```bash
nest new nest_api_sample
cd nest_api_sample
```

### 4. Install Dependencies
```bash
npm install @nestjs/typeorm typeorm mysql2
npm install @nestjs/jwt passport passport-jwt @nestjs/passport bcrypt
npm install @nestjs/config
npm install @nestjs/cache-manager cache-manager
```

### 5. Run the Server
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