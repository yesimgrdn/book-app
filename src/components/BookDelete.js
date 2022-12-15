import React, { useEffect, useState } from 'react'
import { getBook,deleteSelectedBook } from '../functions/http/http'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import BookPage from './BookPage'
function BookDelete() {
    const location=useLocation()
    const navigate=useNavigate()
  
    // console.log(location.state.id)
   // console.log(location.pathname)
   //gönderdiğimiz id okuyoruz
    console.log(location.state.id)
    const [selectedBook,setSelectedBook]=useState({
        bookname:"",
        description:"",
        author:"",
        picture:"",
        recyled:false,
    });
 useEffect(()=>{
        getBook(location.state.id).then((res)=>{
            setSelectedBook(res.data)
        })
    },[]) 
    const onChangeText=(event)=>{
      setSelectedBook({...selectedBook,[event.target.name]: event.target.value})
    }
    const deleteBook= ()=> {
      deleteSelectedBook(location.state.id,selectedBook)
      .then((res)=>{

              alert("Book delete successfully")
              navigate("/")

      })
  }

  return (
<BookPage book={selectedBook} onChangeText={onChangeText} updateBook={deleteBook} value={"Sil"}/>
  )
}

export default BookDelete