import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Skyspear Solutions. All rights reserved.</p>
                    <p className="gstin">GSTIN: 33BMLPR2223N1ZS</p>
                    <p>Designed with <span className="heart">❤</span> for the Future.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
