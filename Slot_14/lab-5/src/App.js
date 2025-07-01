import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import QuizApp from './quiz/QuizApp';

function App() {
  return (
    <BrowserRouter>
      <div className="text-start">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<QuizApp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
