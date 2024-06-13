import React, { FC, useState } from 'react';
import { Book as BookType } from '../redux/libraryAction';
import { useDispatch } from 'react-redux';

const Book: FC<{ info: BookType }> = ({ info }) => {
  const [isEdit, setEdit] = useState(false);
  const [title, setTitle] =  useState<string>(info.title); 
  const [author, setAuthor] =  useState<string>(info.author); 
  const [year, setYear] =  useState<number>(info.year);

  const dispatch = useDispatch();

const handleSaveBook = () => {
    dispatch({type: 'library/edit', payload: {isbn: info.isbn, title, author, year}})
    setEdit(false);
    setTitle(title);
    setAuthor(author);
    setYear(year)
}

const handleEditBook = () => {
    setEdit(true);
}

  return isEdit ? (
    <li>
        <label> Title: 
        <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        <label> Author:
        <input type="text" placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)}/>
        </label>
        <label> Year: 
        <input type="text" placeholder='Year' value={year} onChange={e => setYear(+e.target.value)}/>
        </label>
    
        <button onClick={handleSaveBook}>Save Book</button>

    </li>
  ) : (
    <li>
      {info.title} by {info.author} ({info.year})<button onClick={handleEditBook}>Edit Book</button>
      <button
        onClick={() => dispatch({ type: 'library/delete', payload: info.isbn })}
      >
        Delete Book
      </button>
    </li>
  );
};

export default Book;

// import React, { useState } from 'react'
// import { Book } from '../redux/libraryAction'

// interface BookProps {
//  book: Book,
//  onDelete: (isbn: string) => void;
//   onEdit: (book: Book) => void;
// }

// const BookEditer: React.FC<BookProps> = ({ book, onDelete, onEdit }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [title, setTitle] = useState(book.title);
//     const [author, setAuthor] = useState(book.author);
//     const [year, setYear] = useState<number>(book.year);

// const handleSave = () => {
//     onEdit({ ...book, title, author });
//     setIsEditing(false);
//   };

// return (
//     <div>
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             value={title}
//             onChange={(element) => setTitle(element.target.value)}
//           />
//           <input
//             type="text"
//             value={author}
//             onChange={(element) => setAuthor(element.target.value)}
//           />
//           <input
//             type="number"
//             value={year}
//             onChange={(element) => setYear(parseInt(element.target.value))}
//           />
//           <button onClick={handleSave}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <h3>{book.title}</h3>
//           <p>{book.author}</p>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={() => onDelete(book.isbn)}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Book;
