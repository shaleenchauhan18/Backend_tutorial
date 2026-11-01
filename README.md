# Intro to Backend — Node, Express & MongoDB

Based on freeCodeCamp's *Intro to Backend Web Development* tutorial.
User auth (register / login / logout with bcrypt) + Post CRUD APIs.

## Folder structure
```
src/
├── index.js              # Entry point: loads .env, connects DB, starts server
├── app.js                # Express app + route mounting
├── constants.js          # DB name
├── config/database.js    # MongoDB connection (mongoose)
├── models/               # Data shape (schemas)
│   ├── user.model.js
│   └── post.model.js
├── controllers/          # Logic for each API
│   ├── user.controller.js
│   └── post.controller.js
└── routes/               # URL → controller mapping
    ├── user.route.js
    └── post.route.js
```

## Setup
1. `npm install`
2. Copy `.env.example` → `.env`, paste your MongoDB Atlas URI (no trailing `/`)
3. `npm run dev`  → `Server running on port 4000`

## APIs (base: http://localhost:4000/api/v1)
| Method | URL | Body |
|---|---|---|
| POST | /users/register | username, email, password |
| POST | /users/login | email, password |
| POST | /users/logout | email |
| POST | /posts/create | name, description, age |
| GET | /posts/getPosts | — |
| PATCH | /posts/update/:id | any field |
| DELETE | /posts/delete/:id | — |

Import `postman_collection.json` into Postman to test all of them.
