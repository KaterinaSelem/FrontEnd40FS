/*
1. add book;
2. edit book;
3. delete book;
*/

export type Book = {
isbn: string;
title: string ;
year: number;
author: string;
};


export type libraryAction = 
| { type: 'library/add', payload: Omit<Book, 'isbn'> } //при добавлении мы добавляем цкликом
| { type: 'library/edit', payload: Book } 
| { type: 'library/delete', payload: string } //isbn является строкой, так что типизируем как string мбо удалять будем по isbn