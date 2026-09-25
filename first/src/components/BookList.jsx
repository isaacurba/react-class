import { useEffect, useState } from "react";
import styles from "./booklist.module.css";
import { mockBookList } from "./mockBookList";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await mockBookList();w
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const addBook = (e) => {
    e.preventDefault();

    const trimmedBook = newBook.trim();
    
    if (!trimmedBook) return;

    setBooks((prevBooks) => [
        ...prevBooks, {id: books.length + 1, name: trimmedBook,},
    ]);
    setNewBook("");
  };

  const filteredBooks = books.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.pageBanner}>
          <h1 className="title">Book Collections</h1>
          <p>Books</p>
          <form className={styles.searchBooks}>
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </header>

      <div className={styles.bookList}>
        <h2 className="title">Books to Read</h2>
        <ul>
          {filteredBooks.map(({ id, name }) => (
            <li key={id}>
              <span className={styles.name}>{name}</span>
              <button
                type="button"
                onClick={() => deleteBook(id)}
                className={styles.delete}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <form className={styles.addBook} onSubmit={addBook}>
        <input
          type="text"
          placeholder="Add a book..."
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BookList;