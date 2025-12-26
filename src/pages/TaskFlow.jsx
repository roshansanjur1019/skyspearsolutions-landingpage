import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseLayout from '../components/ShowcaseLayout';
import { FaTasks, FaCalendarAlt, FaUsers, FaFlag, FaBell, FaSync } from 'react-icons/fa';

const TaskFlow = () => {
    return (
        <ShowcaseLayout>
            <section className="showcase-hero">
                <div className="container showcase-hero-content">
                    <p className="showcase-category">Mobile Application</p>
                    <h1 className="showcase-title">TaskFlow Pro</h1>
                    <p className="showcase-description">
                        Productivity and task management mobile app with project boards, calendar sync,
                        and priority tracking. Streamline your workflow and boost productivity.
                    </p>
                    <div className="showcase-cta">
                        <Link to="/#contact" className="btn btn-primary">Get Started</Link>
                        <Link to="/#contact" className="btn btn-secondary">Watch Demo</Link>
                    </div>
                </div>
            </section>

            <section className="showcase-features">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaTasks className="feature-icon" />
                            <h3 className="feature-title">Project Boards</h3>
                            <p className="feature-desc">
                                Organize tasks with Kanban-style boards, lists, and cards for
                                visual project management.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaCalendarAlt className="feature-icon" />
                            <h3 className="feature-title">Calendar Sync</h3>
                            <p className="feature-desc">
                                Seamlessly integrate with Google Calendar, Outlook, and Apple
                                Calendar for unified scheduling.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaUsers className="feature-icon" />
                            <h3 className="feature-title">Team Collaboration</h3>
                            <p className="feature-desc">
                                Collaborate with team members, assign tasks, and track progress
                                in real-time.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaFlag className="feature-icon" />
                            <h3 className="feature-title">Priority Tracking</h3>
                            <p className="feature-desc">
                                Set priorities, deadlines, and dependencies to ensure critical
                                tasks are completed on time.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaBell className="feature-icon" />
                            <h3 className="feature-title">Smart Reminders</h3>
                            <p className="feature-desc">
                                Get intelligent reminders and notifications to stay on top of
                                your tasks and deadlines.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaSync className="feature-icon" />
                            <h3 className="feature-title">Cross-Device Sync</h3>
                            <p className="feature-desc">
                                Access your tasks from anywhere with automatic sync across all
                                your devices.
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
                            <img src="/assets/taskflow-app.png" alt="TaskFlow Pro App" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-cta-section">
                <div className="container">
                    <h2 className="cta-title">Boost Your Productivity Today</h2>
                    <p className="cta-subtitle">
                        Join professionals worldwide who trust TaskFlow to manage their work.
                    </p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Try Free for 14 Days</Link>
                </div>
            </section>
        </ShowcaseLayout>
    );
};

export default TaskFlow;
