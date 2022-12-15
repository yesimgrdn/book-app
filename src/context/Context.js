import { createContext,useReducer} from "react";
export const  BookContext =createContext(
{
    booklist:[],
    

});
 //action:method ismi veya paremetre
 //State:Değişen nesneler
 //reverse b/k sıralama
//action payload gelen data

//listeleme
function bookReducer(State,action){
    //type hangi işlemin yapıldığı
    //payload gönderilicek veri
    switch (action.type) {
        case "SET":
            const inverted = action.payload.reverse()
            return inverted
        default:
            return State
    }
}
function BookProvider({children})
{
  //redux state'ini güncellemek için kullanılır.
const[bookState,dispatch]=useReducer(bookReducer,[])
function setBook(books)
{
    dispatch({type:'SET',payload:books});
}
const value={
    books:bookState,
    setBook:setBook,
};
return(
    <BookContext.Provider value={value}>
 {children}
    </BookContext.Provider>
);
}
export default BookProvider