import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import BookProvider from './context/Context';


window.rlist="";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BookProvider><App/></BookProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
