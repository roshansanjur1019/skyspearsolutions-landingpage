import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseLayout from '../components/ShowcaseLayout';
import { FaHeartbeat, FaDumbbell, FaAppleAlt, FaChartLine, FaTrophy, FaMobileAlt } from 'react-icons/fa';

const HealthSync = () => {
    return (
        <ShowcaseLayout>
            <section className="showcase-hero">
                <div className="container showcase-hero-content">
                    <p className="showcase-category">Mobile Application</p>
                    <h1 className="showcase-title">HealthSync Wellness</h1>
                    <p className="showcase-description">
                        Cross-platform health and fitness tracker with activity monitoring, workout plans,
                        and wellness analytics. Your personal health companion for a better lifestyle.
                    </p>
                    <div className="showcase-cta">
                        <Link to="/#contact" className="btn btn-primary">Download Now</Link>
                        <Link to="/#contact" className="btn btn-secondary">View Features</Link>
                    </div>
                </div>
            </section>

            <section className="showcase-features">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaHeartbeat className="feature-icon" />
                            <h3 className="feature-title">Activity Monitoring</h3>
                            <p className="feature-desc">
                                Track your daily steps, heart rate, calories burned, and sleep
                                patterns with advanced sensors.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaDumbbell className="feature-icon" />
                            <h3 className="feature-title">Workout Plans</h3>
                            <p className="feature-desc">
                                Access personalized workout plans designed by fitness experts
                                for all fitness levels.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaAppleAlt className="feature-icon" />
                            <h3 className="feature-title">Nutrition Tracking</h3>
                            <p className="feature-desc">
                                Log your meals, track macros, and get personalized nutrition
                                recommendations for your goals.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaChartLine className="feature-icon" />
                            <h3 className="feature-title">Health Analytics</h3>
                            <p className="feature-desc">
                                Visualize your progress with detailed charts and insights into
                                your health and fitness trends.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaTrophy className="feature-icon" />
                            <h3 className="feature-title">Goals & Achievements</h3>
                            <p className="feature-desc">
                                Set fitness goals, earn achievements, and stay motivated with
                                challenges and rewards.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaMobileAlt className="feature-icon" />
                            <h3 className="feature-title">Device Integration</h3>
                            <p className="feature-desc">
                                Sync with popular fitness trackers and smartwatches for
                                comprehensive health monitoring.
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
                            <img src="/assets/healthsync-app.png" alt="HealthSync Wellness App" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-cta-section">
                <div className="container">
                    <h2 className="cta-title">Transform Your Health Journey</h2>
                    <p className="cta-subtitle">
                        Join thousands of users achieving their fitness goals with HealthSync.
                    </p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Start Free Trial</Link>
                </div>
            </section>
        </ShowcaseLayout>
    );
};

export default HealthSync;
