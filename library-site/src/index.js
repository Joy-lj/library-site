import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Library from "./pages/Library";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import BookDescription from './pages/BookDescription';
import BorrowedBook from './pages/BorrowedBook';
import ReturnBook from './pages/ReturnBook';
import ReturnedBook from './pages/ReturnedBook';
import Book from './pages/Book';
import Admin from "./pages/Admin";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="about" element={(<About />)} />
          <Route path="contact" element={(<Contact />)} />
          <Route path="library" element={(<Library />)} />
          <Route path="login" element={(<Login />)} />
          <Route path="signup" element={(<SignUp />)} />
          <Route path="bookdescription" element={(<BookDescription />)} />
          <Route path="borrowedbook" element={(<BorrowedBook />)} />
          <Route path="returnbook" element={(<ReturnBook />)} />
          <Route path="returnedbook" element={(<ReturnedBook />)} />
          <Route path="book" element={(<Book />)} />
          <Route path="admin" element={(<Admin />)} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App/>
);
