import Layout from './components/Layout';
import Booklist from './components/Booklist'
import BookCreate from  './components/BookCreate'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookRecyled from './components/BookRecyled';
import BookUpdate from './components/BookUpdate';
import BookDelete from './components/BookDelete';
function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Layout />
        <Routes>
    
           <Route path ="/" element = {<Booklist/>}></Route> 
           <Route path ="/recyled" element = {<BookRecyled/>}></Route> 
           <Route path ="/book/create" element = {<BookCreate/>}></Route> 
           <Route path ="/book/update:id" element = {<BookUpdate/>}></Route> 
           <Route path ="/book/delete:id" element = {<BookDelete/>}></Route> 
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;