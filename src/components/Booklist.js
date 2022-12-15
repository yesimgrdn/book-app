import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/Context';
import { getBooks } from '../functions/http/http';
import BookDetail from './BookDetail';
import { useNavigate } from 'react-router-dom';
export default function BookList() {
    const [visible, setVisible] = useState(false) 
  const navigate=useNavigate()
    const context = useContext(BookContext);
    const detail = (b) => {
        //setVisible = !setVisible

        console.log(b)
    }

    useEffect(() => {
        async function getAllBooks() {
            const books = await getBooks(); // api den çekilen kitaplar
            context.setBook(books);
             console.log(books)
        }
        getAllBooks();
    }, [])
    return (
      <div  className='row'>
        <div className='col-md-7'>

          <button className='btn btn-primary' onClick={()=>navigate("/book/create")}>New book</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Book Name</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {context.books.map(b => {
                    return ( 
                        <tr onClick={() => detail(b)} key={b.id}>
                            <td><img src={b.picture} width="75px" /></td>
                            <td>{b.bookname}</td>
                            <td>{b.description}</td>
                            <td>{b.author}</td>
                            <td>   <BookDetail  book={b} /></td>
                            <td> <button className='btn btn-success' onClick={()=>navigate("/book/update"+b.id,{state:{id:b.id},})}>Update</button></td>
                            <td> <button className='btn btn-success' onClick={()=>navigate("/book/delete"+b.id,{state:{id:b.id},})}>Delete</button></td>
                        </tr>
                    )
              
                })}
                     
            </tbody>
    
        </table>
        </div>
        <div className='col-md-6' >
        
        </div>
        </div>
    )
}