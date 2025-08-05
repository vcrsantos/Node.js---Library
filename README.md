# Project: Node.js Library

This project is a simple API and web page for a library, developed as part of the Alura Warm-up for the Software Engineering post-graduate program. It uses Node.js, Express and MongoDB.

## Features

- RESTful API for managing books and authors
- Integration with MongoDB database

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your MongoDB connection string in `src/config/dbConnect.js`.

4. Start the server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
Project 1/
├── public/
│   ├── index.html
│   ├── style.css
│   └── background.gif
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
├── package.json
└── README.md
```

## Main Routes

- `GET /` — Home page (HTML)
- `GET /livros` — List of books (JSON)
- `GET /autores` — List of authors (JSON)
