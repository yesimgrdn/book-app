import React from 'react'

function BookPage({book,onChangeText,updateBook,value}) {
  return (
    <div className="row">
        <div className="col-md-5">
        <label>Book Name</label>
          <input
            className="form-control"
            type="text"
             value={book.bookname}
            name="bookname"
            onChange={onChangeText}
          />
          <label>Author</label>
          <input
            className="form-control"
            type="text"
            value={book.author}
            name="author"
            onChange={onChangeText}
          />
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            value={book.description}
            name="description"
            onChange={onChangeText}
          />
          <input className="btn btn-success" type="submit" value ={value }
            onClick={() =>updateBook() }
          />
   
      
        </div>
      </div>
  )
}

export default BookPage