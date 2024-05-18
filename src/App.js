import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import './css/style.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header/>
                <AppRouter/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
