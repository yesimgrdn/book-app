import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {addBook} from '../functions/http/http'
import BookPage from './BookPage'

export default function BookCreate() {
    const navigate = useNavigate()
    const [newBook,setnewBook]=useState({
        bookname: "",
        description: "",
        author: "",
        picture: "",
        recyled: false,
    })
    const createBook= ()=> {
        addBook(newBook)
        .then(()=>{

                alert("Book created successfully")
                navigate("/")

        })
    }

    const onChangeText= (event)=>{
        setnewBook({...newBook,[event.target.name]: event.target.value})
        console.log(newBook)
    }
  return (
    <BookPage book={newBook} onChangeText={onChangeText} updateBook={createBook} value={"Create"}/>
  )
}