import { uid } from "uid";
import { Book, libraryAction } from "./libraryAction";

interface ILibraryState {
    books: Book[]
}

const initialState = {
    books: [
        {
            isbn: '5-85880-304-0',
            title: 'Религиоведение',
            author: 'В. Н. Нечипуренко',
            year: 1996,

        }
    ]
}

export default function libraryReducer( state: ILibraryState = initialState, action: libraryAction) : ILibraryState{
switch (action.type) {
    case 
    'library/add':
        return {...state, books: [...state.books, { isbn: uid(12), ...action.payload }] };

    case 
    'library/edit': {
        const { isbn, ...updatedData } = action.payload;
        return {
          ...state,
          books: state.books.map(book =>
            book.isbn === isbn ? { ...book, ...updatedData } : book
          ),
        };
     }
     case 
    'library/delete': {
        const { isbn } = action.payload;
        return {
          ...state,
          books: state.books.filter(book => book.isbn !== isbn),
        };
     }
        

    default:
        return state;
}
} 