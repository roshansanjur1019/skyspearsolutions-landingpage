import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseLayout from '../components/ShowcaseLayout';
import { FaSearch, FaCheckCircle, FaCog, FaFileAlt, FaBolt, FaShieldAlt } from 'react-icons/fa';

const AutoSec = () => {
    return (
        <ShowcaseLayout>
            <section className="showcase-hero">
                <div className="container showcase-hero-content">
                    <p className="showcase-category">Automation Tool</p>
                    <h1 className="showcase-title">AutoSec Interface</h1>
                    <p className="showcase-description">
                        Automated security compliance tool that scans and remediates cloud vulnerabilities.
                        Protect your infrastructure with intelligent automation and real-time threat detection.
                    </p>
                    <div className="showcase-cta">
                        <Link to="/#contact" className="btn btn-primary">Schedule Demo</Link>
                        <Link to="/#contact" className="btn btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>

            <section className="showcase-features">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaSearch className="feature-icon" />
                            <h3 className="feature-title">Automated Scanning</h3>
                            <p className="feature-desc">
                                Continuously scan your cloud infrastructure for security
                                vulnerabilities and configuration issues.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaCheckCircle className="feature-icon" />
                            <h3 className="feature-title">Compliance Checks</h3>
                            <p className="feature-desc">
                                Ensure compliance with industry standards like SOC 2, HIPAA,
                                PCI-DSS, and GDPR automatically.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaCog className="feature-icon" />
                            <h3 className="feature-title">Auto-Remediation</h3>
                            <p className="feature-desc">
                                Automatically fix common security issues and misconfigurations
                                without manual intervention.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaFileAlt className="feature-icon" />
                            <h3 className="feature-title">Detailed Reports</h3>
                            <p className="feature-desc">
                                Generate comprehensive security reports and audit trails for
                                compliance documentation.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaBolt className="feature-icon" />
                            <h3 className="feature-title">Real-Time Alerts</h3>
                            <p className="feature-desc">
                                Get instant notifications when new vulnerabilities are detected
                                or compliance violations occur.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaShieldAlt className="feature-icon" />
                            <h3 className="feature-title">Threat Intelligence</h3>
                            <p className="feature-desc">
                                Leverage threat intelligence to stay ahead of emerging security
                                risks and vulnerabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-screenshots">
                <div className="container">
                    <h2 className="section-title">Interface Preview</h2>
                    <div className="screenshots-grid">
                        <div className="screenshot-card">
                            <img src="/assets/security-ui.png" alt="AutoSec Interface" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-cta-section">
                <div className="container">
                    <h2 className="cta-title">Secure Your Cloud Infrastructure Today</h2>
                    <p className="cta-subtitle">
                        Automate your security compliance and protect your business from threats.
                    </p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Get Started</Link>
                </div>
            </section>
        </ShowcaseLayout>
    );
};

export default AutoSec;
