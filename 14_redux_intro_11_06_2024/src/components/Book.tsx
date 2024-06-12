import React, { useState } from 'react'
import { Book } from '../redux/libraryAction'

interface BookProps {
 book: Book,
 onDelete: (isbn: string) => void;
  onEdit: (book: Book) => void;
}

const Book: React.FC<BookProps> = ({ book, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [year, setYear] = useState<number>(book.year);

const handleSave = () => {
    onEdit({ ...book, title, author });
    setIsEditing(false);
  };

return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(element) => setTitle(element.target.value)}
          />
          <input
            type="text"
            value={author}
            onChange={(element) => setAuthor(element.target.value)}
          />
          <input
            type="number"
            value={year}
            onChange={(element) => setYear(parseInt(element.target.value))}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(book.isbn)}>Delete</button>
        </div>
      )}
    </div>
  );
};




export default Book;
