import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/Context';
import { getBooks } from '../functions/http/http';

export default function BookList() {
    const context = useContext(BookContext);

    useEffect(() => {
        async function getAllBooks() {
            const books = await getBooks(); // api den çekilen kitaplar
            const rbooks = [];


            for(let c of books) {
              if(c.recyled == true) {
                  rbooks.push(c)
              }
            
          }
      
            context.setBook(rbooks);
        }
        getAllBooks();
    }, [])
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Book Name</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Recyled</th>
                </tr>
            </thead>
            <tbody>
                {context.books.map(b => {
                    return (
                        <tr key={b.id}>
                            <td><img src={b.picture} width="75px" /></td>
                            <td>{b.bookname}</td>
                            <td>{b.description}</td>
                            <td>{b.author}</td>
                         
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
