# 📚 Bookify Express

A simple **Book Management CRUD web app** built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **EJS** templating.

## 🚀 Features

- View all books
- Add a new book
- View a single book's details
- Edit a book's information
- Delete a book

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Runtime     | Node.js                 |
| Framework   | Express.js v5           |
| Database    | MongoDB + Mongoose v9   |
| Templating  | EJS v7                  |
| Dev Server  | Nodemon                 |

## 📁 Project Structure

```
bookify-express/
├── controllers/
│   └── book.js          # Request handlers
├── models/
│   └── book.js          # Mongoose schema & model
├── routes/
│   └── book.js          # Express routes
├── views/
│   ├── books.ejs        # All books listing
│   ├── book.ejs         # Single book details
│   ├── new-book.ejs     # Add new book form
│   └── edit-book.ejs    # Edit book form
├── public/
│   ├── index.html       # Static landing page
│   └── styles/
│       └── style.css    # Stylesheet
├── index.js             # App entry point
├── package.json
└── .gitignore
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krishnakumar2509/bookify-express.git
   cd bookify-express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB** (if not already running)
   ```bash
   mongod
   ```

4. **Run the app**
   ```bash
   npm start
   ```

5. Open your browser and visit: [http://localhost:8000/books](http://localhost:8000/books)

## 🔗 API Routes

| Method | Route                  | Description          |
|--------|------------------------|----------------------|
| GET    | `/books`               | List all books       |
| GET    | `/books/new`           | Show add book form   |
| POST   | `/books`               | Create a new book    |
| GET    | `/books/:bookId`       | Get a single book    |
| GET    | `/books/edit/:bookId`  | Show edit book form  |
| PUT    | `/books/:bookId`       | Update a book        |
| DELETE | `/books/:bookId`       | Delete a book        |

## 📦 Book Schema

```js
{
  isbn:       Number,   // required
  bookName:   String,   // required
  authorName: String,   // required
  pages:      Number,   // required
  price:      Number    // required
}
```

## 📄 License

ISC
