import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="portfolio">
            <Header />
            <main>
                <AboutMe />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;