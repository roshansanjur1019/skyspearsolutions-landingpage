import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseLayout from '../components/ShowcaseLayout';
import { FaWallet, FaChartPie, FaBell, FaMobileAlt, FaLock, FaSync } from 'react-icons/fa';

const FinTrack = () => {
    return (
        <ShowcaseLayout>
            <section className="showcase-hero">
                <div className="container showcase-hero-content">
                    <p className="showcase-category">Mobile Application</p>
                    <h1 className="showcase-title">FinTrack Mobile App</h1>
                    <p className="showcase-description">
                        Personal finance tracking app for iOS and Android with real-time expense monitoring
                        and budget insights. Take control of your finances with smart tracking and analytics.
                    </p>
                    <div className="showcase-cta">
                        <Link to="/#contact" className="btn btn-primary">Download App</Link>
                        <Link to="/#contact" className="btn btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>

            <section className="showcase-features">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaWallet className="feature-icon" />
                            <h3 className="feature-title">Expense Tracking</h3>
                            <p className="feature-desc">
                                Track all your expenses in one place with automatic categorization
                                and smart receipt scanning.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaChartPie className="feature-icon" />
                            <h3 className="feature-title">Budget Insights</h3>
                            <p className="feature-desc">
                                Get personalized budget recommendations and insights based on your
                                spending patterns and financial goals.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaBell className="feature-icon" />
                            <h3 className="feature-title">Smart Alerts</h3>
                            <p className="feature-desc">
                                Receive notifications when you're approaching budget limits or
                                unusual spending is detected.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaMobileAlt className="feature-icon" />
                            <h3 className="feature-title">Cross-Platform</h3>
                            <p className="feature-desc">
                                Available on both iOS and Android with seamless sync across all
                                your devices.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaLock className="feature-icon" />
                            <h3 className="feature-title">Bank-Level Security</h3>
                            <p className="feature-desc">
                                Your financial data is protected with bank-level encryption and
                                biometric authentication.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaSync className="feature-icon" />
                            <h3 className="feature-title">Real-Time Sync</h3>
                            <p className="feature-desc">
                                Connect your bank accounts for automatic transaction imports and
                                real-time balance updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-screenshots">
                <div className="container">
                    <h2 className="section-title">App Preview</h2>
                    <div className="screenshots-grid">
                        <div className="screenshot-card">
                            <img src="/assets/fintrack-app.png" alt="FinTrack Mobile App" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-cta-section">
                <div className="container">
                    <h2 className="cta-title">Start Managing Your Finances Better</h2>
                    <p className="cta-subtitle">
                        Download FinTrack today and take the first step towards financial freedom.
                    </p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Get the App</Link>
                </div>
            </section>
        </ShowcaseLayout>
    );
};

export default FinTrack;
