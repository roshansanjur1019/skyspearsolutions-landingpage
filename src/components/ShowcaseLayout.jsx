import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './ShowcaseLayout.css';

const ShowcaseLayout = ({ children }) => {
    return (
        <div className="showcase-layout">
            <Navbar />
            <div className="showcase-back-link">
                <Link to="/" className="back-btn">
                    <span>←</span> Back to Portfolio
                </Link>
            </div>
            <main className="showcase-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default ShowcaseLayout;
