import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './pages/navbar';
import Matches from './pages/matches';
import Newsfeed from './pages/newsfeed';
import Community from './pages/Community'
import About from './pages/About';
import Home from './pages/Home';
import Chatbot from './pages/chatbot';
import './App.css';
import './CSS/Score.css';
import './CSS/SignUp.css';
import './CSS/about.css';
import './CSS/ChatBot.css';
import LogIn from './pages/login';
import SignUp from './pages/SignUP';
import HomeNav from './pages/HomeNav';
import { useAuth } from './pages/AuthContext';
import {Contact }from './pages/contact';
import FantasyPlayer from './pages/Fantasy';
function App() {
  const {isAuthenticated}=useAuth(
  )
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={isAuthenticated?<Navbar/>:<HomeNav/>}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/news_feed" element={<Newsfeed />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/loginin" element={<LogIn />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FantasyPlay" element={<FantasyPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
