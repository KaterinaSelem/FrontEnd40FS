import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '../redux/libraryAction';
import { RootState } from '../redux/store';
import { uid } from 'uid';
import Book from './Book';


const Library: React.FC = () => {
  const books = useSelector((state: RootState) => state.library.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState<number>( ); 

  const handleAddBook = () => {
    if (title.trim() && author.trim() && year) {
      dispatch({
        type: 'library/add',
        payload: { title, author, year: Number(year) },
      });
      setTitle('');
      setAuthor('');
      setYear( );
    }
  };

  const handleDeleteBook = (isbn: string) => {
    dispatch({ type: 'library/delete', payload: { isbn } });
  };

  const handleEditBook = (book: Book) => {
    dispatch({ type: 'library/edit', payload: book });
  };

  return (
    <div>
      <h1>Library</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <div>
        {books.map((book) => (
          <Book
            key={uid}
            book={book}
            onDelete={handleDeleteBook}
            onEdit={handleEditBook}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
