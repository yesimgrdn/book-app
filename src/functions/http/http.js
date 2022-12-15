
import axios from 'axios'

const url = 'https://books-e4864-default-rtdb.firebaseio.com/'

export async function getBooks(){
    const response = await axios.get(url + '/books.json')

    const books = []

    for (const key in response.data){
        const booksObj = {
            id: key,
            author: response.data[key].author,
            desciption: response.data[key].desciption,
            bookname: response.data[key].bookname,
            picture: response.data[key].picture,
            recycled: response.data[key].recycled
        }
        books.push(booksObj)
    }
    return books
}
export async function addBook (book){
        const response = await axios.post(url + 'books.json', book)
        alert(response.data.name)
        const id = response.data.name
        return id 
    }
export function updateSelectedBook(id,bookData)
    {
        return axios.put(url+`books/${id}.json`,bookData)
    }
export function getBook(id)
{
    return axios.get(url+`books/${id}.json`)
}
export function deleteSelectedBook(id,bookData)
    {
        return axios.delete(url+`books/${id}.json`,bookData)
    }