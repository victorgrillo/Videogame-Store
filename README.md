## 🚀 Roadmap

This project is being developed as a backend study project.
The goal is to gradually evolve a simple videogame store into a structured REST API while applying concepts commonly used in backend development.

### 🟢 Phase 1 — HTTP & Node.js Fundamentals

* [x] Basic Node.js project structure
* [x] Understand HTTP fundamentals
* [x] HTTP methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
* [x] HTTP status codes
* [x] Request and Response
* [x] Headers
* [x] JSON
* [ ] Route parameters
* [ ] Query parameters

---

### 🟢 Phase 2 — REST API

* [ ] Install and configure Express
* [ ] Create the first API routes
* [ ] Understand REST principles
* [ ] Define API resources
* [ ] Create RESTful endpoints
* [ ] Organize routes
* [ ] Test endpoints using Postman/Insomnia

Example:

```text
GET    /products
GET    /products/:id
POST   /products
PATCH  /products/:id
DELETE /products/:id
```

---

### 🟢 Phase 3 — CRUD

Implement the basic CRUD operations using in-memory data before introducing a database.

* [ ] Create products
* [ ] List all products
* [ ] Find product by ID
* [ ] Update products
* [ ] Delete products
* [ ] Validate product existence
* [ ] Return appropriate HTTP status codes
* [ ] Handle basic errors

**CRUD concepts:**

```text
Create → POST
Read   → GET
Update → PUT/PATCH
Delete → DELETE
```

---

### 🟡 Phase 4 — PostgreSQL & SQL

Replace the in-memory data with a relational database.

* [ ] Install PostgreSQL
* [ ] Understand relational databases
* [ ] Learn SQL fundamentals
* [ ] Create database and tables
* [ ] Primary Keys
* [ ] Foreign Keys
* [ ] Constraints
* [ ] `SELECT`
* [ ] `INSERT`
* [ ] `UPDATE`
* [ ] `DELETE`
* [ ] `JOIN`
* [ ] Database relationships
* [ ] Basic database modeling

Initial entities:

```text
Customers
Products
Orders
Order Items
```

---

### 🟡 Phase 5 — ORM & Database Integration

Integrate PostgreSQL with the application using Prisma.

* [ ] Install Prisma
* [ ] Create Prisma schema
* [ ] Configure PostgreSQL connection
* [ ] Create migrations
* [ ] Define relationships
* [ ] Perform CRUD operations with Prisma
* [ ] Understand ORM vs SQL
* [ ] Handle database errors
* [ ] Use transactions when necessary

Architecture:

```text
API
 ↓
Controller
 ↓
Service
 ↓
Prisma
 ↓
PostgreSQL
```

---

### 🟡 Phase 6 — Backend Architecture

Improve the organization and maintainability of the application.

* [ ] Controllers
* [ ] Services
* [ ] Repositories
* [ ] Routes
* [ ] Middlewares
* [ ] Separation of concerns
* [ ] Environment variables
* [ ] Configuration management

Target structure:

```text
src/
├── controllers/
├── services/
├── repositories/
├── routes/
├── middlewares/
├── schemas/
├── database/
└── app.js
```

---

### 🟡 Phase 7 — Validation & Business Rules

Implement rules that represent the actual behavior of a videogame store.

* [ ] Validate request bodies
* [ ] Validate data types
* [ ] Validate required fields
* [ ] Validate prices
* [ ] Validate stock
* [ ] Prevent negative stock
* [ ] Prevent purchases without sufficient stock
* [ ] Calculate order totals
* [ ] Prevent invalid order status transitions
* [ ] Create centralized error handling

Validation will be implemented using **Zod**.

---

### 🟠 Phase 8 — Authentication & Authorization

Add users and protected resources.

* [ ] User registration
* [ ] Password hashing with bcrypt
* [ ] User login
* [ ] JWT authentication
* [ ] Authentication middleware
* [ ] Protected routes
* [ ] User roles
* [ ] Customer/Admin permissions

Example:

```text
Customer
 ├── View products
 ├── Create orders
 └── View own orders

Admin
 ├── Create products
 ├── Update products
 ├── Delete products
 └── Manage orders
```

---

### 🟠 Phase 9 — Automated Tests

Introduce automated testing to ensure that the API behaves as expected.

* [ ] Unit tests
* [ ] Integration tests
* [ ] Test services
* [ ] Test controllers
* [ ] Test validation
* [ ] Test authentication
* [ ] Test business rules
* [ ] Test error scenarios
* [ ] Measure test coverage

Testing tools:

```text
Vitest / Jest
```

Example:

```text
✓ should create a product
✓ should reject invalid product data
✓ should find a product
✓ should return 404 for nonexistent product
✓ should prevent purchasing without stock
✓ should reject unauthorized requests
```

---

### 🟠 Phase 10 — API Documentation

Document the API using OpenAPI/Swagger.

* [ ] Install Swagger
* [ ] Document endpoints
* [ ] Document request bodies
* [ ] Document responses
* [ ] Document authentication
* [ ] Add interactive API documentation

Expected endpoint documentation:

```text
/api-docs
```

---

### 🔴 Phase 11 — Docker & Deployment

Containerize the application and prepare it for deployment.

* [ ] Create Dockerfile
* [ ] Create Docker Compose
* [ ] Containerize Node.js application
* [ ] Containerize PostgreSQL
* [ ] Configure environment variables
* [ ] Configure production environment
* [ ] Deploy API
* [ ] Configure CI/CD with GitHub Actions

Expected architecture:

```text
              ┌──────────────┐
              │    Client    │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   REST API   │
              │    Node.js   │
              └──────┬───────┘
                     │
              ┌──────▼───────┐
              │   Services   │
              └──────┬───────┘
                     │
              ┌──────▼───────┐
              │   Prisma     │
              └──────┬───────┘
                     │
              ┌──────▼───────┐
              │  PostgreSQL  │
              └──────────────┘
```

---

## 🛠️ Technologies

Technologies and tools planned for the project:

| Technology            | Purpose             |
| --------------------- | ------------------- |
| **Node.js**           | Backend runtime     |
| **Express**           | REST API            |
| **PostgreSQL**        | Relational database |
| **SQL**               | Database queries    |
| **Prisma**            | ORM                 |
| **Zod**               | Data validation     |
| **JWT**               | Authentication      |
| **bcrypt**            | Password hashing    |
| **Vitest / Jest**     | Automated testing   |
| **Swagger / OpenAPI** | API documentation   |
| **Docker**            | Containerization    |
| **Git / GitHub**      | Version control     |

---

## 🎯 Project Goal

The main goal of this project is not to create a production-ready videogame store, but to use a small and realistic backend application to study and practice concepts such as:

* REST APIs
* CRUD
* SQL and relational databases
* Database modeling
* API architecture
* Data validation
* Business rules
* Authentication and authorization
* Error handling
* Automated testing
* API documentation
* Docker
* Git and GitHub

The project will be developed incrementally, with each phase introducing new backend concepts and technologies.
