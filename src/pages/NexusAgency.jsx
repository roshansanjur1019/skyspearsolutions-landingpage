import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseLayout from '../components/ShowcaseLayout';
import { FaCube, FaRocket, FaPalette, FaMobile, FaCode, FaLightbulb } from 'react-icons/fa';

const NexusAgency = () => {
    return (
        <ShowcaseLayout>
            <section className="showcase-hero">
                <div className="container showcase-hero-content">
                    <p className="showcase-category">Web Development</p>
                    <h1 className="showcase-title">Nexus Creative Agency</h1>
                    <p className="showcase-description">
                        High-performance landing page with stunning 3D elements and smooth scroll animations.
                        A modern, cutting-edge website designed to captivate and convert visitors.
                    </p>
                    <div className="showcase-cta">
                        <Link to="/#contact" className="btn btn-primary">View Live Demo</Link>
                        <Link to="/#contact" className="btn btn-secondary">Get Quote</Link>
                    </div>
                </div>
            </section>

            <section className="showcase-features">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaCube className="feature-icon" />
                            <h3 className="feature-title">3D Elements</h3>
                            <p className="feature-desc">
                                Immersive 3D graphics and interactive elements that bring your
                                brand to life and engage visitors.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaRocket className="feature-icon" />
                            <h3 className="feature-title">Smooth Animations</h3>
                            <p className="feature-desc">
                                Buttery-smooth scroll animations and transitions that create
                                a premium, modern user experience.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaPalette className="feature-icon" />
                            <h3 className="feature-title">Modern Design</h3>
                            <p className="feature-desc">
                                Contemporary design with glassmorphism, gradients, and vibrant
                                colors that stand out from the competition.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaMobile className="feature-icon" />
                            <h3 className="feature-title">Fully Responsive</h3>
                            <p className="feature-desc">
                                Perfect display on all devices - desktop, tablet, and mobile
                                with adaptive layouts.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaCode className="feature-icon" />
                            <h3 className="feature-title">Clean Code</h3>
                            <p className="feature-desc">
                                Built with modern technologies and best practices for optimal
                                performance and maintainability.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaLightbulb className="feature-icon" />
                            <h3 className="feature-title">SEO Optimized</h3>
                            <p className="feature-desc">
                                Search engine optimized structure and content to help your
                                business rank higher in search results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-screenshots">
                <div className="container">
                    <h2 className="section-title">Design Preview</h2>
                    <div className="screenshots-grid">
                        <div className="screenshot-card">
                            <img src="/assets/landing-page.png" alt="Nexus Creative Agency" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-cta-section">
                <div className="container">
                    <h2 className="cta-title">Ready to Transform Your Digital Presence?</h2>
                    <p className="cta-subtitle">
                        Let's create something amazing together. Get in touch to discuss your project.
                    </p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Start Your Project</Link>
                </div>
            </section>
        </ShowcaseLayout>
    );
};

export default NexusAgency;
