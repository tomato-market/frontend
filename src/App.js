import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home.js';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Board from 'pages/Board';
import Post from 'pages/Post';
import PostDetail from 'pages/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board" element={<Board />} />
        <Route path="/post" element={<Post />} />
        <Route path="/postDetail" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
