import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Cloud Sentinel Dashboard",
            category: "Cloud Security & Monitoring",
            image: "/assets/cloud-dashboard.png",
            desc: "A comprehensive dashboard for real-time cloud infrastructure monitoring, security alerts, and cost analysis.",
            link: "/cloud-sentinel"
        },
        {
            title: "Nexus Creative Agency",
            category: "Web Development",
            image: "/assets/landing-page.png",
            desc: "High-performance landing page with 3D elements and smooth scroll animations for a digital agency.",
            link: "/nexus-agency"
        },
        {
            title: "AutoSec Interface",
            category: "Automation Tool",
            image: "/assets/security-ui.png",
            desc: "Interface for an automated security compliance tool that scans and remediates cloud vulnerabilities.",
            link: "/autosec"
        },
        {
            title: "FinTrack Mobile App",
            category: "Mobile Application",
            image: "/assets/fintrack-app.png",
            desc: "Personal finance tracking app for iOS and Android with real-time expense monitoring and budget insights.",
            link: "/fintrack"
        },
        {
            title: "HealthSync Wellness",
            category: "Mobile Application",
            image: "/assets/healthsync-app.png",
            desc: "Cross-platform health and fitness tracker with activity monitoring, workout plans, and wellness analytics.",
            link: "/healthsync"
        },
        {
            title: "TaskFlow Pro",
            category: "Mobile Application",
            image: "/assets/taskflow-app.png",
            desc: "Productivity and task management mobile app with project boards, calendar sync, and priority tracking.",
            link: "/taskflow"
        }
    ];

    return (
        <section id="portfolio" className="section-padding portfolio">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">Showcasing innovation in Cloud, Web, and Mobile</p>
                </motion.div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <Link to={project.link} key={index} className="project-link">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="project-card glass-card"
                            >
                                <div className="project-img-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-img"
                                        loading="lazy"
                                        width="350"
                                        height="250"
                                    />
                                </div>
                                <div className="project-info">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
