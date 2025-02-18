import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"; 
import Post from "./Post.jsx";
import Header from './Header.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;