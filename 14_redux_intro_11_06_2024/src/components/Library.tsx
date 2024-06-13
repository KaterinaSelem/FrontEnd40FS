import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Book from './Book';
import { FormEvent, useState } from 'react';



const Library: React.FC = () => {
    const [title, setTitle] =  useState<string>(''); 
    const [author, setAuthor] =  useState<string>(''); 
    const [year, setYear] =  useState<number>(0); 

  const books = useSelector((state: RootState) => state.library.books);
const dispatch = useDispatch();

const handleSubmit = (e: FormEvent) => {
 e.preventDefault();
 dispatch({ type: 'library/add', payload: {title, author, year } });
 setTitle('');
 setAuthor('');
 setYear(0);

}

return (
<div>
    <h2>Add Book</h2>

    <form onSubmit={handleSubmit}>
        <label> Title: 
        <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        <label> Author:
        <input type="text" placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)}/>
        </label>
        <label> Year: 
        <input type="text" placeholder='Year' value={year} onChange={e => setYear(+e.target.value)}/>
        </label>
    
        <button>Add Book</button>
    </form>

<h2>Books list: </h2>
<ul>
 { books.map(book =>(
<Book key={book.isbn} info={book}/>
  ) ) }
</ul>
</div>

)


}

//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [year, setYear] = useState<number>( ); 

//   const handleAddBook = () => {
//     if (title.trim() && author.trim() && year) {
//       dispatch({
//         type: 'library/add',
//         payload: { title, author, year: Number(year) },
//       });
//       setTitle('');
//       setAuthor('');
//       setYear( );
//     }
//   };

//   const handleDeleteBook = (isbn: string) => {
//     dispatch({ type: 'library/delete', payload: { isbn } });
//   };

//   const handleEditBook = (book: Book) => {
//     dispatch({ type: 'library/edit', payload: book });
//   };

//   return (
//     <div>
//       <h2>Book List: </h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Year"
//           value={year}
//           onChange={(e) => setYear(parseInt(e.target.value))}
//         />
//         <button onClick={handleAddBook}>Add Book</button>
//       </div>
//       <div>
//         {books.map((book) => (
//           <BookEditer
//             key={uid}
//             book={book}
//             onDelete={handleDeleteBook}
//             onEdit={handleEditBook}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default Library;
