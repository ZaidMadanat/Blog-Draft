import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"; 
import Post from "./Post.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page listing all blog posts */}
        <Route path="/" element={<Home />} />

        {/* Individual blog post page (slug param) */}
        <Route path="/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;