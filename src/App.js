import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectSubmissionForm from './components/ProjectSubmissionForm';
import JudgingInterface from './components/JudgingInterface';
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    
    <Router>
       <Header/>
        <Footer/>
      <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<ProjectShowcase/>} />
        <Route path="/submit" element={<ProjectSubmissionForm/>} />
        <Route path="/judge" element={<JudgingInterface/>} />
      </Routes>
    </Router>
  );
}

export default App;
