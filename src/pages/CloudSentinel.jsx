import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseLayout from '../components/ShowcaseLayout';
import { FaShieldAlt, FaChartLine, FaBell, FaCloud, FaLock, FaDollarSign } from 'react-icons/fa';

const CloudSentinel = () => {
    return (
        <ShowcaseLayout>
            <section className="showcase-hero">
                <div className="container showcase-hero-content">
                    <p className="showcase-category">Cloud Security & Monitoring</p>
                    <h1 className="showcase-title">Cloud Sentinel Dashboard</h1>
                    <p className="showcase-description">
                        A comprehensive dashboard for real-time cloud infrastructure monitoring,
                        security alerts, and cost analysis. Monitor your entire cloud ecosystem
                        from a single, powerful interface.
                    </p>
                    <div className="showcase-cta">
                        <Link to="/#contact" className="btn btn-primary">Request Demo</Link>
                        <Link to="/#contact" className="btn btn-secondary">Contact Us</Link>
                    </div>
                </div>
            </section>

            <section className="showcase-features">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaCloud className="feature-icon" />
                            <h3 className="feature-title">Real-Time Monitoring</h3>
                            <p className="feature-desc">
                                Monitor your cloud infrastructure in real-time with live metrics,
                                performance dashboards, and instant alerts.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaShieldAlt className="feature-icon" />
                            <h3 className="feature-title">Security Alerts</h3>
                            <p className="feature-desc">
                                Get instant notifications about security threats, vulnerabilities,
                                and compliance issues across your cloud environment.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaDollarSign className="feature-icon" />
                            <h3 className="feature-title">Cost Analysis</h3>
                            <p className="feature-desc">
                                Track and optimize cloud spending with detailed cost breakdowns,
                                forecasting, and budget alerts.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaChartLine className="feature-icon" />
                            <h3 className="feature-title">Performance Analytics</h3>
                            <p className="feature-desc">
                                Analyze performance trends, identify bottlenecks, and optimize
                                resource utilization with advanced analytics.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaBell className="feature-icon" />
                            <h3 className="feature-title">Smart Notifications</h3>
                            <p className="feature-desc">
                                Receive intelligent alerts via email, Slack, or SMS when critical
                                events occur in your infrastructure.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaLock className="feature-icon" />
                            <h3 className="feature-title">Compliance Tracking</h3>
                            <p className="feature-desc">
                                Ensure compliance with industry standards and regulations with
                                automated compliance checks and reporting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-screenshots">
                <div className="container">
                    <h2 className="section-title">Dashboard Preview</h2>
                    <div className="screenshots-grid">
                        <div className="screenshot-card">
                            <img src="/assets/cloud-dashboard.png" alt="Cloud Sentinel Dashboard" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-cta-section">
                <div className="container">
                    <h2 className="cta-title">Ready to Secure Your Cloud?</h2>
                    <p className="cta-subtitle">
                        Get started with Cloud Sentinel today and take control of your cloud infrastructure.
                    </p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Get Started</Link>
                </div>
            </section>
        </ShowcaseLayout>
    );
};

export default CloudSentinel;
